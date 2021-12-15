# Typescript + ESM modules + Jest + Typehead template

A template for a small lib that uses `@mapbox/typeahead` for bootstrapping a typescript repository.
It was a nightmare to figure out how to run the tests with this setup when one of the dependencies is a ESM module. Big thanks to @jason-henriksen for his [repo](https://github.com/jason-henriksen/typescript-with-esm-no-babel-boilerplate).

## Usage

```sh
npm run build # build sources with tsc to dist folder
npm run serve # run the typehead server from web folder
npm t # run the tests
```
