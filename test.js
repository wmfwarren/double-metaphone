'use strict';

/*
 * Dependencies.
 */

const doubleMetaphone = require('./');
const {assert} = require("chai");

/*
 * Tests.
 */

//Design Note
//A captial T in most cases stands for a string that is before or after the portion being tested
//it should be able to be filled in with almost any string and the test should pass.

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
    it("should tansform IA's into I0", () => {
      assert.deepEqual(doubleMetaphone("TIA"), ["TI0", "TI0"]) /////////Needs a check
      assert.deepEqual(doubleMetaphone("IA"), ['I0', 'I0'])
      assert.deepEqual(doubleMetaphone("IAT"), ["I0T", "I0T"])
    });
    it("should tansform IO's into 0", () => {
      assert.deepEqual(doubleMetaphone("TIO"), ["T0", "T0"])
      assert.deepEqual(doubleMetaphone("IO"), ['0', '0'])
      assert.deepEqual(doubleMetaphone("IOT"), ["0T", "0T"])
    });
    it("should tansform IE's into I's", () => {
      assert.deepEqual(doubleMetaphone("TIE"), ["TI", "TI"])
      assert.deepEqual(doubleMetaphone("IE"), ['I', 'I'])
      assert.deepEqual(doubleMetaphone("IET"), ["IT", "IT"])
    });
    it("should tansform II's into I's", () => {
      assert.deepEqual(doubleMetaphone("TII"), ["TI", "TI"])
      assert.deepEqual(doubleMetaphone("II"), ['I', 'I'])
      assert.deepEqual(doubleMetaphone("IIT"), ["IT", "IT"])
    });
    it("should tansform IY's into A's", () => {
      assert.deepEqual(doubleMetaphone("TIY"), ["TIY", "TIY"])
      assert.deepEqual(doubleMetaphone("IY"), ['IY', 'IY'])
      assert.deepEqual(doubleMetaphone("IYT"), ["IYT", "IYT"])
    });
    it("should tansform IU's followed by M into E0's", () => {
      assert.deepEqual(doubleMetaphone("TIUM"), ["TE0M", "TE0M"])
      assert.deepEqual(doubleMetaphone("IUM"), ['E0M', 'E0M'])
      assert.deepEqual(doubleMetaphone("IUMT"), ["E0MT", "E0MT"])
    });
    it("should tansform IU's followed by S into E0's", () => {
      assert.deepEqual(doubleMetaphone("TIUS"), ["TE0S", "TE0S"])
      assert.deepEqual(doubleMetaphone("IUS"), ['E0S', 'E0S'])
      assert.deepEqual(doubleMetaphone("IUST"), ["E0ST", "E0ST"])
    });
    it("should tansform IU's proceeded by an L into 0's", () => {
      assert.deepEqual(doubleMetaphone("TLIU"), ["TL0", "TL0"])
      assert.deepEqual(doubleMetaphone("LIU"), ['L0', 'L0'])
      assert.deepEqual(doubleMetaphone("LIUT"), ["L0T", "L0T"])
    });
    it("should tansform IU's proceeded by a J into 0's", () => {
      assert.deepEqual(doubleMetaphone("TJIU"), ["TJ0", "TJ0"])
      assert.deepEqual(doubleMetaphone("JIU"), ['J0', 'J0']) /////////Needs a check
      assert.deepEqual(doubleMetaphone("JIUT"), ["J0T", "J0T"])
    });
  });
  // O transforms
  describe("O vowel Transforms", () => {
    it("should tansform OA's into O", () => {
      assert.deepEqual(doubleMetaphone("TOA"), ["TO", "TO"])
      assert.deepEqual(doubleMetaphone("OA"), ['O', 'O'])
      assert.deepEqual(doubleMetaphone("OAT"), ["OT", "OT"])
    });
    it("should tansform OE's into O", () => {
      assert.deepEqual(doubleMetaphone("TOE"), ["TO", "TO"])
      assert.deepEqual(doubleMetaphone("OE"), ['O', 'O'])
      assert.deepEqual(doubleMetaphone("OET"), ["OT", "OT"])
    });
    it("should tansform OI's into OE", () => {
      assert.deepEqual(doubleMetaphone("TOI"), ["TOE", "TOE"])
      assert.deepEqual(doubleMetaphone("OI"), ['OE', 'OE'])
      assert.deepEqual(doubleMetaphone("OIT"), ["OET", "OET"])
    });
    it("should tansform OO's into 0", () => {
      assert.deepEqual(doubleMetaphone("TOO"), ["T0", "T0"])
      assert.deepEqual(doubleMetaphone("OO"), ['0', '0'])
      assert.deepEqual(doubleMetaphone("OOT"), ["0T", "0T"])
    });
    it("should tansform OU's into 0", () => {
      assert.deepEqual(doubleMetaphone("TOU"), ["T0", "T0"])
      assert.deepEqual(doubleMetaphone("OU"), ['0', '0'])
      assert.deepEqual(doubleMetaphone("OUT"), ["0T", "0T"])
    });
    it("should tansform OY's into OY", () => {
      assert.deepEqual(doubleMetaphone("TOY"), ["TOY", "TOY"])
      assert.deepEqual(doubleMetaphone("OY"), ['OY', 'OY'])
      assert.deepEqual(doubleMetaphone("OYT"), ["OYT", "OYT"])
    });
    it("should tansform O's into 0", () => {
      assert.deepEqual(doubleMetaphone("TO"), ["T0", "T0"])
      assert.deepEqual(doubleMetaphone("O"), ['0', '0'])
      assert.deepEqual(doubleMetaphone("OT"), ["0T", "0T"])
    });
  });
  // U vowel Transforms
  describe("U vowel Transforms", () => {
    it("should tansform UA's into 0", () => {
      assert.deepEqual(doubleMetaphone("TUA"), ["T0", "T0"])
      assert.deepEqual(doubleMetaphone("UA"), ['0', '0'])
      assert.deepEqual(doubleMetaphone("UAT"), ["0T", "0T"])
    });
    it("should tansform UE's into U", () => {
      assert.deepEqual(doubleMetaphone("TUE"), ["TU", "TU"])
      assert.deepEqual(doubleMetaphone("UE"), ['U', 'U'])
      assert.deepEqual(doubleMetaphone("UET"), ["UT", "UT"])
    });
    it("should tansform UI's into 0", () => {
      assert.deepEqual(doubleMetaphone("TUI"), ["T0", "T0"])
      assert.deepEqual(doubleMetaphone("UI"), ['0', '0'])
      assert.deepEqual(doubleMetaphone("UIT"), ["0T", "0T"])
    });
    it("should tansform U0's into 0", () => {
      assert.deepEqual(doubleMetaphone("TUO"), ["T0", "T0"])
      assert.deepEqual(doubleMetaphone("UO"), ['0', '0'])
      assert.deepEqual(doubleMetaphone("UOT"), ["0T", "0T"])
    });
    it("should tansform UU's into U", () => {
      assert.deepEqual(doubleMetaphone("TUU"), ["TU", "TU"])
      assert.deepEqual(doubleMetaphone("UU"), ['U', 'U'])
      assert.deepEqual(doubleMetaphone("UUT"), ["UT", "UT"])
    });
    it("should tansform UY's into I", () => {
      assert.deepEqual(doubleMetaphone("TUY"), ["TI", "TI"])
      assert.deepEqual(doubleMetaphone("UY"), ['I', 'I'])
      assert.deepEqual(doubleMetaphone("UYT"), ["IT", "IT"])
    });
    it("should tansform U's into 0", () => {
      assert.deepEqual(doubleMetaphone("TU"), ["T0", "T0"])
      assert.deepEqual(doubleMetaphone("U"), ['0', '0'])
      assert.deepEqual(doubleMetaphone("UT"), ["0T", "0T"])
    });
    // Q transformes
    it("should tansform --QUE's into KWU", () => {
      assert.deepEqual(doubleMetaphone("TQUE"), ["TKWU", "TKWU"]) //// need to fix
      assert.deepEqual(doubleMetaphone("QUE"), ['KWU', 'KWU'])
    });
    it("should tansform QUE--'s into KW", () => {
      assert.deepEqual(doubleMetaphone("TQUET"), ["TKWT", "TKWT"]) //// need to fix
    });
  });
  // Y vowel Transforms
  describe("Y as a vowel transforms", () => {
    it("should tansform YA's into 10", () => {
      assert.deepEqual(doubleMetaphone("TYA"), ["T10", "T10"])
      assert.deepEqual(doubleMetaphone("YA"), ['10', '10'])
      assert.deepEqual(doubleMetaphone("YAT"), ["10T", "10T"])
    });
    it("should tansform YE's into 1E", () => {
      assert.deepEqual(doubleMetaphone("TYE"), ["T1E", "T1E"])
      assert.deepEqual(doubleMetaphone("YE"), ['1E', '1E'])
      assert.deepEqual(doubleMetaphone("YET"), ["1ET", "1ET"])
    });
    it("should tansform YI's into 11", () => {
      assert.deepEqual(doubleMetaphone("TYI"), ["T11", "T11"])
      assert.deepEqual(doubleMetaphone("YI"), ['11', '11'])
      assert.deepEqual(doubleMetaphone("YIT"), ["11T", "11T"])
    });
    it("should tansform YO's into 10", () => {
      assert.deepEqual(doubleMetaphone("TYO"), ["T1O", "T1O"])
      assert.deepEqual(doubleMetaphone("YO"), ['1O', '1O'])
      assert.deepEqual(doubleMetaphone("YOT"), ["1OT", "1OT"])
    });
    it("should tansform YU's into U", () => {
      assert.deepEqual(doubleMetaphone("TYU"), ["TU", "TU"])
      assert.deepEqual(doubleMetaphone("YU"), ['U', 'U'])
      assert.deepEqual(doubleMetaphone("YUT"), ["UT", "UT"])
    });
    it("should tansform Y's into 1", () => {
      assert.deepEqual(doubleMetaphone("TY"), ["T1", "T1"])
      assert.deepEqual(doubleMetaphone("Y"), ['1', '1'])
      assert.deepEqual(doubleMetaphone("YT"), ["1T", "1T"])
    });
  });

  /////***Consonant Tests***\\\\\

  // B transforms
  describe("B transformations", () => {

  });
});
