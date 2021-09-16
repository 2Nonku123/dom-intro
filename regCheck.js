

module.exports=function regCheck(reg, regEnds){
    return reg.endsWith(regEnds)
  }

  /*
  console.log(regCheck('DC 55 YU GP', 'GP'));
  console.log(regCheck('5566 L', 'L'));
  console.log(regCheck('ERT 123 EC', 'EC'));
  console.log(regCheck('FGT 123 MP', 'MP'));
  */