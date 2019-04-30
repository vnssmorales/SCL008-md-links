///tallerers

/*
const addNumbersInArray = (arr) => {

    if(arr.length < 1) return 0;
  
    if(arr.length == 1) return arr[0];
  
    return arr[0] + addNumbersInArray(arr.splice(1));
  
  }  */

////taller promesas alpi///

 /* const fs = require('fs');

//reaFile as a Promise ///
  const readAfile = (fileName, type) => {
    return new Promise ((resolve, reject) => {
      fs.readFile(fileName,type, (error,content) => {
        if(error) {
          reject(error);
        }else {
          resolve(content);
        }
      });
    });
  }
  readAfile("README.md", "utf-8")
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error)
          });

*/