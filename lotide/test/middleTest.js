const assert = require('chai').assert;

const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const recursion = require('../eqArrays');

describe("middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [] for [5]", () => {
    assert.deepEqual(middle(['5']), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [4,5] for [1, 2, 3, 4, 5, 6])", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [4,5]);
  });

});