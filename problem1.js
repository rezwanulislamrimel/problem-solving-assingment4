function cubeNumber(number) {
    if (typeof number === 'number') {
      return Math.pow(number, 3);
    } else {
      return `Input must be a number, but received ${typeof number}.`;
    }
  }
  
  // Console section 
  console.log(cubeNumber(3)); 
  console.log(cubeNumber(4)); 
  console.log(cubeNumber("string")); 
  