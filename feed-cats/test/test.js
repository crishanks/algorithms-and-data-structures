let assert = require('assert');
let expect = require('chai').expect;
let chai = require('chai');
let sinon = require('sinon');
let sinonChai = require('sinon-chai');
let cat = require('../feed-cat.js');

chai.use(sinonChai);

describe('Feed the Cat', () => {
  describe('cat.feed', () => {
    it('should return the cat is full when n >= 0', () => {
      assert.equal('the cat is full', cat.feed(4));
    });
    it('should log the cat is still hungry while n > 0', () => {
      const logSpy = sinon.spy(console, 'log');
      cat.feed(3);
      expect(logSpy.calledThrice).to.be.true;
    });
  });
});