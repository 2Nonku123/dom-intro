
module.exports = function countAllFromTown(regNum,town){
    var list = regNum.split(',');
    
    var counter = 0;
    var fromTown = []
    for (var i=0 ; i<list.length; i++){
      var newList = list[i].trim();
      
      if(newList.includes(town)== true){
      counter++;
        
     } 
  }
    console.log(newList);
  return counter;
   }    