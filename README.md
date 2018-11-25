# Źródła do budowy webappek

## Co potrzeba?

Musisz mieć node.js i zainstalować dev-zależności albo standardowym

```
npm install --only=dev
```

albo, jeśli jak ja nie lubisz wolmo,

```
yarn install
```

Potem, żeby zbudować:

```
npm build.js
```

W każdym katalogu projektu, build stworzy katalog dst, w którym będzie sklonowana gałąź master repo właściwego dla podprojektu, następnie wrzuci tam świeżo zbudowane pliki.

W takiej sytuacji jedyne, co pozostaje, to commitnąć zmiany i pchnąć je gdzie trzeba!

## Czemu taki skrypt a nie (webpack/grunt/gulp/co tam obecnie jest modne)

Znaczy z jednej strony ja wiem o co ci chodzi i jak się projekty porozrastają może będzie trzeba pójść tą drogą, ale z drugiej strony

![jest taka sprawa](doc_imgs/node-modules.jpg)