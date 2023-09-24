function findAddress(Obj) {
    if (!Obj.street || !Obj.house || !Obj.society) {
      
      const street = Obj.street || "__";
      const house = Obj.house || "__";
      const society = Obj.society || "__";
      return `${street},${house},${society}`;
    } else {
      return `${Obj.street},${Obj.house},${Obj.society}`;
    }
  }
  
  // Console section 
  console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" }));
  console.log(findAddress({ street: 10, society: "Earth Perfect" })); 
  console.log(findAddress({ street: 10 }));