function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
      return [];
    }
  
    const totalNotes = changeArray.reduce((acc, note) => acc + note, 0);
    
    return totalNotes >= totalDue;
  }
  
  // Console section 
  console.log(canPay([1, 2, 5], 10));
  console.log(canPay([1, 5, 5], 10)); 
  console.log(canPay([], 10));
  