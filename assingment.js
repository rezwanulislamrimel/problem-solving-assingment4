function cubeNumber(number) {
    if (typeof number === 'number') {
      return Math.pow(number, 3);
    } else {
      return `Input must be a number, but received ${typeof number}.`;
    }
}


// -------------------------------------


function matchFinder(String1, String2) {
    if (typeof String1 !== 'string' || typeof String2 !== 'string') {
      return "Small amount of money";
    }
  
    if (String1.includes(String2)) {
      return true;
    } else {
      return false;
    }
  }
  

//   ----------------------


function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2 || arr.some(element => typeof element !== 'number' || element < 0)) {
      return "Invalid";
    }
  
    if (arr[0] === arr[1]) {
      return "equal";
    }
  
    return arr.sort((a, b) => a - b);
  }
  


//   ------------------------

function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
      return [];
    }
  
    const totalNotes = changeArray.reduce((acc, note) => acc + note, 0);
    
    return totalNotes >= totalDue;
  }
  



