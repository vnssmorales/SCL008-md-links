#!/usr/bin/env node
const mdLinks = require('./md-links');
const threeArgument = process.argv[2];
const fourArgument =process.argv[3];


///para saber si lo estan ejecutando desde la terminal o lo usan como modulo
if(require.main === module) {
  mdLinks(threeArgument,fourArgument).then(console.log);
}

mdLinks(threeArgument,fourArgument)

/*
const mdLinks = require('./md-links');
console.log(mdLinks.add(1,2));
console.log(mdLinks.multiply(2,2));
*/

/*module.exports = () => {
  console.log('Welcome to the outside!')
} */

////ejemplo promesas readme////

/*
const mdLinks = require("md-links");

mdLinks("./index.js/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./index.js/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./index.js/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
  */
