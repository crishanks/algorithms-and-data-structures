const assert = require('assert');
const find = require('../first-unique-character.js');
const sinon = require('sinon');

describe('Find First Unique Character', () => {
  describe('createWordObject', () => {
    it('should call firstUniqueCharacter', () => {
      let spy = sinon.spy(find.firstUniqueCharacter, 'loop');
      spy.callCount.should.eql(0);
      find.createWordObject('loop');
      spy.calledOnce.should.eql(true);
    });
    it('firstUniqueCharacter should be called with a letter count object', () => {
      const fucSpy = sinon.spy(firstUniqueCharacter);
      assert(fucSpy.calledOnce);
      assert(fucSpy.called);
      assert.equal(fucSpy.callCount, 1);
      const args = fucSpy()[0].args;
      assert.equal({'l': 1, 'o': 2, 'p': 1}, args);
      // firstUniqueCharacter();
      // firstUniqueCharacter.getCall(0).args => should be {'l': 1, 'o': 2, 'p': 1}
    });
    it('should return 0 if an empty string is passed in', () => {
      assert.equal(0, find.createWordObject(''));
    });
  });
  describe('firstUniqueCharacter', () => {
    it('should return the first character that is not repeated', () => {
      assert.equal('l', find.firstUniqueCharacter({'l': 1, 'o': 2, 'p': 1}));
    });
  });
})

