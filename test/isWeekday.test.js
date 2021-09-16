


let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday',function(){
    it('should return false if the parameter passed in is a day of the week',function(){
        assert.equal(isWeekday('Saturday'), false);
    })
    it('should return true if the parameter passed in is a day of the week',function(){
        assert.equal(isWeekday('Monday'), true);
        
    })
  
    });


