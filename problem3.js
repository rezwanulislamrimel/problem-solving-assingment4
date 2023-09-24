function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2 || arr.some(element => typeof element !== 'number' || element < 0)) {
      return "Invalid";
    }
  
    if (arr[0] === arr[1]) {
      return "equal";
    }
  
    return arr.sort((a, b) => a - b);
  }
  
  // Console section
  console.log(sortMaker([2, 3])); 
  console.log(sortMaker([4, 2])); 
  console.log(sortMaker([4, 4])); 
  console.log(sortMaker([1, 2])); 
  console.log(sortMaker([4, -2])); 
  