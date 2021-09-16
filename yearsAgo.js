module.exports=function yearsAgo(getyear){
    const current = new Date()
    return current.getFullYear() - getyear;
     
    
   }