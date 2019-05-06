#!/usr/bin/env node

const mdLinks = require('./md-links');

const option0 = process.argv[2];
const option1 =process.argv[3];

///para saber si lo estan ejecutando desde la terminal o lo usan como modulo
if(require.main === module) {
  mdLinks.mdLinks(option0,option1).then(console.log);
}
mdLinks.mdLinks(option0,option1)


