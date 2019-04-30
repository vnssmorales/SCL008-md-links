
'use strict'
const fs = require('fs'); // sistema de archivos
const textMarked = require('marked');//texto plano a otro (como html)
let fetch = require('node-fetch');
const routeFile = require('path'); //manjear rutas





const mdLinks = (path, option) => {
    if (option && option.validate) {
        return new Promise((resolve, reject) => {
            resultLinks(path)
                .then((linksArray) => {
                    resolve(linkValidate(linksArray));
                });
        })
    } else {
        return resultLinks(path);
    }
}


///permite extraer los links de un archivo .md///
const resultLinks = (path) => {

    /// let stats = fs.statSync(path); //lee información del archivo
    ///extension = routeFile.extname(path) //obtiene extension del archivo

    return new Promise((resolve, reject) => {
        try {
            if (routeFile.extname(path) != ".md") {
                throw (new Error("Debes ingresar un archivo con extensión .md"));
            }
            fs.readFile(path, 'utf-8', (error, content) => {
                if (error) {
                    reject(error.code);
                } else {
                    let linksArray = [];
                    const renderer = new textMarked.Renderer();
                    renderer.link = function (href, title, text) {
                        linksArray.push({
                            href: href,
                            text: text,
                            file: path,
                        });
                    };
                    textMarked(content, { renderer: renderer });
                    resolve(linksArray);
                }
            })
        }
        catch (error) {
            reject(error);
        }
    })
}


///permite agregar el status a los links encontrados
const linkValidate = (linksArray) => {
    return Promise.all(linksArray.map(linkObtained => {
        return new Promise((resolve) => {  //devuelve una sola promesa //
            fetch(linkObtained.href)
                .then(resp => {
                    linkObtained.status = resp.status;
                    linkObtained.statusText = resp.statusText;
                    resolve(linkObtained);
                })
                .catch((err) => {
                    linkObtained.status = 0;
                    linkObtained.statusText = error.code;
                    resolve(linkObtained);
                })
        });
    }))
}


module.exports = {
    mdLinks,
    linkValidate
}