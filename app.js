///taller 

const addNumbersInArray = (arr) => {

    if(arr.length < 1) return 0;
  
    if(arr.length == 1) return arr[0];
  
    return arr[0] + addNumbersInArray(arr.splice(1));
  
  }