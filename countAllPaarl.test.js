
let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl',function(){
    it('should return the number of registration numbers in the string for Paarl',function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    })
   
  
    });
