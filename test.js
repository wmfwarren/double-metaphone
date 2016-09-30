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
  describe("A vowel transforms", () => {
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
  });
  // E Transforms
  describe("E vowel transforms", () => {
    it("should transform EA's into E's ", () => {
      assert.deepEqual(doubleMetaphone("TEA"), ["TE", "TE"])
      assert.deepEqual(doubleMetaphone("EA"), ['E', 'E'])
      assert.deepEqual(doubleMetaphone("EAT"), ["ET", "ET"])
    });
    it("should transform EE's into E's ", () => {
      assert.deepEqual(doubleMetaphone("TEE"), ["TE", "TE"])
      assert.deepEqual(doubleMetaphone("EE"), ['E', 'E'])
      assert.deepEqual(doubleMetaphone("EET"), ["ET", "ET"])
    });
    it("should transform EI's into E's ", () => {
      assert.deepEqual(doubleMetaphone("TEI"), ["TE", "TE"])
      assert.deepEqual(doubleMetaphone("EI"), ['E', 'E'])
      assert.deepEqual(doubleMetaphone("EIT"), ["ET", "ET"])
    });
    it("should transform EO's into EO's ", () => {
      assert.deepEqual(doubleMetaphone("TEO"), ["TEO", "TEO"])
      assert.deepEqual(doubleMetaphone("EO"), ['EO', 'EO'])
      assert.deepEqual(doubleMetaphone("EOT"), ["EOT", "EOT"])
    });
    it("should transform EU's into U's if at the start of the word ", () => {
      assert.deepEqual(doubleMetaphone("EUT"), ["UT", "UT"])
      assert.deepEqual(doubleMetaphone("EU"), ["U", "U"])
    });
    it("should transform EU's into 0's if not at start of word", () => {
      assert.deepEqual(doubleMetaphone("TEU"), ["T0", "T0"])
      assert.deepEqual(doubleMetaphone("TEUT"), ["T0T", "T0T"])
    });
    it("should transform EY's into E's ", () => {
      assert.deepEqual(doubleMetaphone("TEY"), ["TE", "TE"])
      assert.deepEqual(doubleMetaphone("EY"), ['E', 'E'])
      assert.deepEqual(doubleMetaphone("EYT"), ["ET", "ET"])
    });
    it("should transform E's to 1's", () => {
        assert.deepEqual(doubleMetaphone("TE"), ["T1", "T1"])
        assert.deepEqual(doubleMetaphone("E"), ['1', '1'])
        assert.deepEqual(doubleMetaphone("ET"), ["1T", "1T"])
      });
    });
  // I Transforms
  describe("I vowel transforms", () => {

  });


});
