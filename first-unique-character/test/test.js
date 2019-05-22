let assert = require('assert');
let find = require('../first-unique-character.js');
let sinon = require('sinon');

describe('Find First Unique Character', () => {
  describe('createWordObject', () => {
    it("should call firstUniqueCharacter with {'l': 1, 'o': 2, 'p': 1}", () => {
      const fucSpy = sinon.spy(find, 'firstUniqueCharacter');
      find.createWordObject('loop');
      assert(fucSpy.calledOnceWith({'l': 1, 'o': 2, 'p': 1}));
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

