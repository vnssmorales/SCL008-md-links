const mdLinks = require('../md-links');


describe('mdLinks', () => {

  it('debería retornar "Debes ingresar un archivo con extensión .md" para el archivo Pruebas.txt', async()  => {
    await expect(mdLinks.mdLinks('./Pruebas.txt')).rejects.toThrow("Debes ingresar un archivo con extensión .md");
  });

  it('Debería retornar 1 links cuando se quiera leer el archivo MIREADME.md', async() => {    
    await expect(mdLinks.mdLinks('./MIREADME.md')).resolves.toEqual(
      [{href:'https://es.wikipedia.org/wiki/Markdown', text:'Markdown', file:'./MIREADME.md' }]);
  });
});

/*
const mdLinks = require('../mdLinks');

describe('funcion add', () => {
  it('debería retornar 4 para suma de 2+2', () => {
    expect(mdLinks.add(2,2)).toBe(4)

  })

}) */
