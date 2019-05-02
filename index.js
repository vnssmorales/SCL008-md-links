#!/usr/bin/env node

const mdLinks = require('./md-links');

const option0 = process.argv[2];
const option1 =process.argv[3];

///para saber si lo estan ejecutando desde la terminal o lo usan como modulo
if(require.main === module) {
  mdLinks.mdLinks(option0,option1).then(console.log);
}
mdLinks.mdLinks(option0,option1)

/*const pathUser = process.argv.slice(2); 
const pathArray = Object.values(pathUser);
const paths = pathArray[0];
const valUser = process.argv.slice(3); 
const comand0 = valUser[0];
const comand1 = valUser[1];

const option = {
    validate : comand0 === '--validate' || comand1 === '--validate',
    stats : comand1 === '--stats' || comand0 === '--stats'
  }

mdLinks.mdLinks(paths)
.then((linksArray)=>{ 
setTimeout(() => { 
if(option.validate && option.stats){
  for (const value in linksArray){
    console.log(value+ " : " +linksArray[value])
  }}else if(option.stats){
    for (const value in linksArray){
      console.log(value+ " : " +linksArray[value])
  }}else{
    linksArray.forEach(element => {
  if(typeof element === 'object'){
    for (const value in element){
      console.log(value+ " : " +element[value])}
  }else{
    console.log(element)
  }
})}}, 12000)
})
*/
