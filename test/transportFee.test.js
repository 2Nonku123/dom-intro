



let assert = require("assert");
let transportFee = require("../transportFee");

describe('transportFee',function(){
    it('should returns the right price based on the shift you are working',function(){
        assert.equal(transportFee('morning'), 'R20');
    })
    it('should returns the right price based on the shift you are working',function(){
        assert.equal(transportFee('afternoon'), 'R10');
        
    })
  
    });
