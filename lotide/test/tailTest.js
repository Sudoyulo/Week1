const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');


describe("tail", () => {
  it('returns 1 for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns ['yoyo'] for ['yoyo', 'yoyo']", () => {
    assert.deepEqual(tail(['yoyo', 'yoyo']), ['yoyo']); 
  });

  it("returns []] for []", () => {
    assert.deepEqual(tail([]), []); 
  });

});


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const words1 = ["Yo Yo"];
tail(words1);
assertEqual(words1.length, 1);

const words0 = [];
tail(words0);
assertEqual(words0.length, 0);
