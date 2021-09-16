
let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellville',function(){
    it('it should return true if registration number is Bellville',function(){
      assert.equal(isFromBellville('CY 123'), true);
    })
    it('it should return false if registration number is Bellville',function(){
      assert.equal(isFromBellville('CJ 123'), false);
    })
  
    });


