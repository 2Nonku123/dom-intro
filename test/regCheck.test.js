
let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck',function(){
    it('should return true if registration number end with EC',function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    })
    it('it should return false if registration number end with GP',function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
        
    })
  
    });