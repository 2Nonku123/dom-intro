module.exports=function totalPhoneBill(items){
    const stringitems = items.split(',');
    let total = 0;
    
    for (var i=0; i<stringitems.length; i++){
      const items = stringitems[i].trim();
      
      if (items == 'call'){
        total += 2.75;
      }
      else if (items == 'sms'){
       total += 0.65;
      }
    }
      return 'R' + total.toFixed(2);
    
  }