
const { execSync } = require('child_process')
const fs = require('fs')
const pug = require('pug')
const yaml = require('js-yaml')

const przygody_data = yaml.safeLoad(fs.readFileSync('przygody/src/przygody.yaml', 'utf8'))

const atrybuty = {
    'przygody': {
        data: JSON.stringify(przygody_data),
        raw_data: przygody_data,
        is_simple: (item) => { return typeof item == 'string' || item instanceof String },
        get_name: (item) => { return Object.keys(item)[0] }
    }
}

Object.keys(atrybuty).forEach((projekt) => {
    let docelowe = `${projekt}/dst`
    let zrodlowe = `${projekt}/src`
    if (!fs.existsSync(docelowe)){
        console.warn(`Katalog '${docelowe}' nie istniał. Sklonuję go.`)
        execSync(`git clone https://github.com/jagodowy-las/${projekt}.git ./${docelowe}`, (err, stout, sterr) => {
            if (err) {
                console.error(sterr, err)
                process.exit(1)
            }
            console.log(`Out: ${stout}`)
            if (sterr) {
                console.error(`Error: ${sterr}`)
            }
        })
    }

    fs.writeFileSync(
        `${docelowe}/index.html`,
        pug.renderFile(`${zrodlowe}/index.pug`, atrybuty[projekt])
    )
})
