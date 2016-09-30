'use strict';

/*
 * Dependencies.
 */

const doubleMetaphone = require('./');
const {assert} = require("chai");

/*
 * Tests.
 */

describe('doubleMetaphone(value)', function () {
  // A Transforms
  it("should tansform AA's into 0", () => {
    assert.deepEqual(doubleMetaphone("TAA"), ["T0", "T0"])
    assert.deepEqual(doubleMetaphone("AA"), ['0', '0'])
    assert.deepEqual(doubleMetaphone("AAT"), ["0T", "0T"])
  });
  it("should tansform AO's into 0", () => {
    assert.deepEqual(doubleMetaphone("TAO"), ["T0", "T0"])
    assert.deepEqual(doubleMetaphone("AO"), ['0', '0'])
    assert.deepEqual(doubleMetaphone("AOT"), ["0T", "0T"])
  });
  it("should tansform AE's into A's", () => {
    assert.deepEqual(doubleMetaphone("TAE"), ["TA", "TA"])
    assert.deepEqual(doubleMetaphone("AE"), ['A', 'A'])
    assert.deepEqual(doubleMetaphone("AET"), ["AT", "AT"])
  });
  it("should tansform AI's into A's", () => {
    assert.deepEqual(doubleMetaphone("TAI"), ["TA", "TA"])
    assert.deepEqual(doubleMetaphone("AI"), ['A', 'A'])
    assert.deepEqual(doubleMetaphone("AIT"), ["AT", "AT"])
  });
  it("should tansform AY's into A's", () => {
    assert.deepEqual(doubleMetaphone("TAY"), ["TA", "TA"])
    assert.deepEqual(doubleMetaphone("AY"), ['A', 'A'])
    assert.deepEqual(doubleMetaphone("AYT"), ["AT", "AT"])
  });
  it("should tansform AU's into OW's", () => {
    assert.deepEqual(doubleMetaphone("TAU"), ["T0W", "T0W"])
    assert.deepEqual(doubleMetaphone("AU"), ['0W', '0W'])
    assert.deepEqual(doubleMetaphone("AUT"), ["0WT", "0WT"])
  });
  it("should tansform A's into 0's", () => {
    assert.deepEqual(doubleMetaphone("TA"), ["T0", "T0"])
    assert.deepEqual(doubleMetaphone("A"), ['0', '0'])
    assert.deepEqual(doubleMetaphone("AT"), ["0T", "0T"])
  });
  // E Transforms
  


});
