
var billItemType = document.querySelector(".billItemTypeRadio");
var callsTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem = document.querySelector(".smsTotalTwo");
var totalCostElem =  document.querySelector(".totalTwo");


var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var callTotal1 = 0
var smsTotal1 = 0
var Total1 = 0 

function billTypeClicked (){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked")

    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
       
        if (billItemType === "call") {
       callTotal1 = callTotal1 + 2.75     
      
      }   
      else if (billItemType === "sms") {
        smsTotal1 = smsTotal1 + 0.75
      }
    }
    Total1 = callTotal1 + smsTotal1
    callsTotalElem.innerHTML = callTotal1.toFixed(2)
    smsTotalElem.innerHTML = smsTotal1.toFixed(2);
    totalCostElem.innerHTML = Total1.toFixed(2)
   //color the total based on the criteria
   if (Total1 >= 50){
    // adding the danger class will make the text red
    totalCostElem.classList.add("danger");
    }
    else if (Total1 >= 30){
    totalCostElem.classList.add("warning");
   
    }
}
console.log(totalCostElem)
radioBillAddBtn.addEventListener("click", billTypeClicked)