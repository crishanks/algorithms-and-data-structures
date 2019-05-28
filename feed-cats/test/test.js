let assert = require('assert');
const expect = require('chai').expect;
let sinon = require('sinon');
let cat = require('../feed-cat');

describe('Feed the Cat', () => {
  describe('cat.feed', () => {
    it('should return the cat is full when n >= 0', () => {
      assert.equal('the cat is full', 4);
    });
    it('should log the cat is still hungry while n > 0', () => {
      const feedSpy = sinon.spy(cat, 'feed');
      cat.feed(1);
      expect(console.log.calledWith('the cat is still hungry')).to.be.true;
    });
  });
});