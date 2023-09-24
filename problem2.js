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
  
  // Console section
  console.log(matchFinder("John Doe", "ohn")); 
  console.log(matchFinder("JavaScript", "Code")); 
  console.log(matchFinder("Peter Parker", "Pen")); 
  console.log(matchFinder("Peter Parker", "pet")); 
  // console.log(matchFinder("Double or any", "double")); 
  