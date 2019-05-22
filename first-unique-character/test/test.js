let assert = require('assert');
let find = require('../first-unique-character.js');
import sinon from 'sinon';

describe('Find First Unique Character', () => {
  describe('createWordObject', () => {
    it('should call firstUniqueCharacter with an object where the keys are the string\'s letters and values are the amount of times the letters appear in the string', () => {
      let spy = sinon.spy(find.firstUniqueCharacter, 'loop');
      spy.callCount.should.eql(0);
      find.createWordObject('loop');
      spy.calledOnce.should.eql(true);
    });
    it('should return 0 if an empty string is passed in', () => {
      assert.equal(0, find.createWordObject(''));
    });
  });
  describe('firstUniqueCharacter', () => {
    it('should return the first character that is not repeated', () => {
      assert.equal('l', find.firstUniqueCharacter({'l': 1, 'o': 2, 'p': 1}));
    });
    it('should return undefined if no object is passed in', () => {
      assert.equal(undefined, find.firstUniqueCharacter());
    });
  });
})

