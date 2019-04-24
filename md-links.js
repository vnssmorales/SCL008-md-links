/* 1
const add = (firstNumber, secondNumber) => {
    if(typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number') {
        return false
    }
    return firstNumber + secondNumber;
}

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

module.exports = {
    add,
    multiply
}    */


///para lectura  2///
/*
const fs = require('fs')

fs.readFile('README.md', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

/// para los links  3///

/*
"use strict";

var fs = require('fs');
var markdownLinkExtractor = require('markdown-link-extractor');

var markdown = fs.readFileSync('README.md').toString();

var links = markdownLinkExtractor(markdown);

links.forEach(function (link) {
    console.log(link);
});
*/

/*
///ejercicio promesas//
let promesa = new Promise ((resolve,reject) => {
    //resolve('Exito al procesar los datos');
    reject('Error');
});

promesa.then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
});
*/


 const fs = require('fs'); // sistema de archivos
 const markdownLinkExtractor = require('markdown-link-extractor');
 const textMarked = require('marked');//texto plano a otro (como html)
 let fetch = require('node-fetch');
 const routeFile = require('path'); //manjear rutas


const mdLinks = (threeArgument, fourArgument) => {

    let stats = fs.statSync(threeArgument); //lee información del archivo
    extension = routeFile.extname(threeArgument) //obtiene extension del archivo

    return new Promise((resolve,reject) => {
        try {
            if(routeFile.extname(threeArgument)!=".md"){
                throw(Error("Debes ingresar un archivo con extensión .md"));
            }
            const markdown = fs.readFileSync(threeArgument).toString();
            const links = markdownLinkExtractor(markdown);

            resolve(links);
      }
          catch(error){
              reject(error)
          }

        })

    }

module.exports = mdLinks;
