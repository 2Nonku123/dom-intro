
let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('yearsAgo',function(){
    it('should return how many years ago that year is from the current yea',function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    })
   
  
    });

