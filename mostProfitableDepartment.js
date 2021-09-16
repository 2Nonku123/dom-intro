module.exports=function mostProfitableDepartment(salesData1){
  
    const departListing = {};
    for (var i=0 ; i<salesData1.length; i++){
      const prod = salesData1[i];
    departListing[prod.department] = 0;
  }
   
  for (var i=0 ; i<salesData1.length; i++){
      const prod = salesData1[i];
    var depart =departListing[prod.department]; 
    depart += prod.sales;   
    departListing[prod.department] = depart        
    
  } 
   
  var currentSales = 0;
   var currentDepart = '';
  for (const departSales in departListing){
   const currentDepartSales = departListing[departSales];
   if(currentDepartSales > currentSales){
    currentSales = currentDepartSales;
   currentDepart = departSales;
   }
  }
    return currentDepart;
  }
  function mostProfitableDay(saleData2){
  const profit = {};
  for (var i=0; i<saleData2.length;i++){
    const prod1 = saleData2[i];
    profit[prod1.day] = 0;
  }
    for (var i=0 ; i<saleData2.length;i++){
      const prod1 = saleData2[i];
      
  var currentDay = profit[prod1.day];
      currentDay += prod1.sales;
      profit[prod1.day] = currentDay;
    }
    var currentSales = 0;
    var currentDay = '';
    for(const daySales in profit){
      const currentDaySales = profit[daySales];
      if(currentDaySales>currentSales){
        currentSales = currentDaySales;
        currentDay = daySales;
      }
    }
    return currentDay;
  }