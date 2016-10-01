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

describe('doubleMetaphone(value) for Vowels', () => {
  // A Transforms
  describe("A vowel transforms", () => {
    it("should tansform AA's into 0", () => {
      assert.deepEqual(doubleMetaphone("TAA"), "T0");
      assert.deepEqual(doubleMetaphone("AA"), '0');
      assert.deepEqual(doubleMetaphone("AAT"), "0T");
    });
    it("should tansform AO's into 0", () => {
      assert.deepEqual(doubleMetaphone("TAO"), "T0");
      assert.deepEqual(doubleMetaphone("AO"), '0');
      assert.deepEqual(doubleMetaphone("AOT"), "0T");
    });
    it("should tansform AE's into A's", () => {
      assert.deepEqual(doubleMetaphone("TAE"), "TA");
      assert.deepEqual(doubleMetaphone("AE"), 'A');
      assert.deepEqual(doubleMetaphone("AET"), "AT");
    });
    it("should tansform AI's into A's", () => {
      assert.deepEqual(doubleMetaphone("TAI"), "TA");
      assert.deepEqual(doubleMetaphone("AI"), 'A');
      assert.deepEqual(doubleMetaphone("AIT"), "AT");
    });
    it("should tansform AY's into A's", () => {
      assert.deepEqual(doubleMetaphone("TAY"), "TA");
      assert.deepEqual(doubleMetaphone("AY"), 'A');
      assert.deepEqual(doubleMetaphone("AYT"), "AT");
    });
    it("should tansform AU's into OW's", () => {
      assert.deepEqual(doubleMetaphone("TAU"), "T0W");
      assert.deepEqual(doubleMetaphone("AU"), '0W');
      assert.deepEqual(doubleMetaphone("AUT"), "0WT");
    });
    it("should tansform A's into 0's", () => {
      assert.deepEqual(doubleMetaphone("TA"), "T0");
      assert.deepEqual(doubleMetaphone("A"), '0');
      assert.deepEqual(doubleMetaphone("AT"), "0T");
    });
  });
  // E Transforms
  describe("E vowel transforms", () => {
    it("should transform EA's into E's ", () => {
      assert.deepEqual(doubleMetaphone("TEA"), "TE");
      assert.deepEqual(doubleMetaphone("EA"), 'E');
      assert.deepEqual(doubleMetaphone("EAT"), "ET");
    });
    it("should transform EE's into E's ", () => {
      assert.deepEqual(doubleMetaphone("TEE"), "TE");
      assert.deepEqual(doubleMetaphone("EE"), 'E');
      assert.deepEqual(doubleMetaphone("EET"), "ET");
    });
    it("should transform EI's into E's ", () => {
      assert.deepEqual(doubleMetaphone("TEI"), "TE");
      assert.deepEqual(doubleMetaphone("EI"), 'E');
      assert.deepEqual(doubleMetaphone("EIT"), "ET");
    });
    it("should transform EO's into EO's ", () => {
      assert.deepEqual(doubleMetaphone("TEO"), "TEO");
      assert.deepEqual(doubleMetaphone("EO"), 'EO');
      assert.deepEqual(doubleMetaphone("EOT"), "EOT");
    });
    it("should transform EU's into U's if at the start of the word ", () => {
      assert.deepEqual(doubleMetaphone("EUT"), "UT");
      assert.deepEqual(doubleMetaphone("EU"), "U");
    });
    it("should transform EU's into 0's if not at start of word", () => {
      assert.deepEqual(doubleMetaphone("TEU"), "T0");
      assert.deepEqual(doubleMetaphone("TEUT"), "T0T");
    });
    it("should transform EY's into E's ", () => {
      assert.deepEqual(doubleMetaphone("TEY"), "TE");
      assert.deepEqual(doubleMetaphone("EY"), 'E');
      assert.deepEqual(doubleMetaphone("EYT"), "ET");
    });
    it("should transform E's to 1's", () => {
        assert.deepEqual(doubleMetaphone("TE"), "T1");
        assert.deepEqual(doubleMetaphone("E"), '1');
        assert.deepEqual(doubleMetaphone("ET"), "1T");
      });
    });
  // I Transforms
  describe("I vowel transforms", () => {
    it("should tansform IA's into I0", () => {
      assert.deepEqual(doubleMetaphone("TIA"), "TI0"); /////////Needs a check
      assert.deepEqual(doubleMetaphone("IA"), 'I0');
      assert.deepEqual(doubleMetaphone("IAT"), "I0T");
    });
    it("should tansform IO's into 0", () => {
      assert.deepEqual(doubleMetaphone("TIO"), "T0");
      assert.deepEqual(doubleMetaphone("IO"), '0');
      assert.deepEqual(doubleMetaphone("IOT"), "0T");
    });
    it("should tansform IE's into I's", () => {
      assert.deepEqual(doubleMetaphone("TIE"), "TI");
      assert.deepEqual(doubleMetaphone("IE"), 'I');
      assert.deepEqual(doubleMetaphone("IET"), "IT");
    });
    it("should tansform II's into I's", () => {
      assert.deepEqual(doubleMetaphone("TII"), "TI");
      assert.deepEqual(doubleMetaphone("II"), 'I');
      assert.deepEqual(doubleMetaphone("IIT"), "IT");
    });
    it("should tansform IY's into A's", () => {
      assert.deepEqual(doubleMetaphone("TIY"), "TIY");
      assert.deepEqual(doubleMetaphone("IY"), 'IY');
      assert.deepEqual(doubleMetaphone("IYT"), "IYT");
    });
    it("should tansform IU's followed by M into E0's", () => {
      assert.deepEqual(doubleMetaphone("TIUM"), "TE0M");
      assert.deepEqual(doubleMetaphone("IUM"), 'E0M');
      assert.deepEqual(doubleMetaphone("IUMT"), "E0MT");
    });
    it("should tansform IU's followed by S into E0's", () => {
      assert.deepEqual(doubleMetaphone("TIUS"), "TE0S");
      assert.deepEqual(doubleMetaphone("IUS"), 'E0S');
      assert.deepEqual(doubleMetaphone("IUST"), "E0ST");
    });
    it("should tansform IU's proceeded by an L into 0's", () => {
      assert.deepEqual(doubleMetaphone("TLIU"), "TL0");
      assert.deepEqual(doubleMetaphone("LIU"), 'L0');
      assert.deepEqual(doubleMetaphone("LIUT"), "L0T");
    });
    it("should tansform IU's proceeded by a J into 0's", () => {
      assert.deepEqual(doubleMetaphone("TJIU"), "TJ0");
      assert.deepEqual(doubleMetaphone("JIU"), 'J0') /////////Needs a check
      assert.deepEqual(doubleMetaphone("JIUT"), "J0T");
    });
  });
  // O transforms
  describe("O vowel Transforms", () => {
    it("should tansform OA's into O", () => {
      assert.deepEqual(doubleMetaphone("TOA"), "TO");
      assert.deepEqual(doubleMetaphone("OA"), 'O');
      assert.deepEqual(doubleMetaphone("OAT"), "OT");
    });
    it("should tansform OE's into O", () => {
      assert.deepEqual(doubleMetaphone("TOE"), "TO");
      assert.deepEqual(doubleMetaphone("OE"), 'O');
      assert.deepEqual(doubleMetaphone("OET"), "OT");
    });
    it("should tansform OI's into OE", () => {
      assert.deepEqual(doubleMetaphone("TOI"), "TOE");
      assert.deepEqual(doubleMetaphone("OI"), 'OE');
      assert.deepEqual(doubleMetaphone("OIT"), "OET");
    });
    it("should tansform OO's into 0", () => {
      assert.deepEqual(doubleMetaphone("TOO"), "T0");
      assert.deepEqual(doubleMetaphone("OO"), '0');
      assert.deepEqual(doubleMetaphone("OOT"), "0T");
    });
    it("should tansform OU's into 0", () => {
      assert.deepEqual(doubleMetaphone("TOU"), "T0");
      assert.deepEqual(doubleMetaphone("OU"), '0');
      assert.deepEqual(doubleMetaphone("OUT"), "0T");
    });
    it("should tansform OY's into OY", () => {
      assert.deepEqual(doubleMetaphone("TOY"), "TOY");
      assert.deepEqual(doubleMetaphone("OY"), 'OY');
      assert.deepEqual(doubleMetaphone("OYT"), "OYT");
    });
    it("should tansform O's into 0", () => {
      assert.deepEqual(doubleMetaphone("TO"), "T0");
      assert.deepEqual(doubleMetaphone("O"), '0');
      assert.deepEqual(doubleMetaphone("OT"), "0T");
    });
  });
  // U vowel Transforms
  describe("U vowel Transforms", () => {
    it("should tansform UA's into 0", () => {
      assert.deepEqual(doubleMetaphone("TUA"), "T0", "T0");
      assert.deepEqual(doubleMetaphone("UA"), '0', '0');
      assert.deepEqual(doubleMetaphone("UAT"), "0T", "0T");
    });
    it("should tansform UE's into U", () => {
      assert.deepEqual(doubleMetaphone("TUE"), "TU", "TU");
      assert.deepEqual(doubleMetaphone("UE"), 'U', 'U');
      assert.deepEqual(doubleMetaphone("UET"), "UT", "UT");
    });
    it("should tansform UI's into 0", () => {
      assert.deepEqual(doubleMetaphone("TUI"), "T0");
      assert.deepEqual(doubleMetaphone("UI"), '0');
      assert.deepEqual(doubleMetaphone("UIT"), "0T");
    });
    it("should tansform U0's into 0", () => {
      assert.deepEqual(doubleMetaphone("TUO"), "T0");
      assert.deepEqual(doubleMetaphone("UO"), '0');
      assert.deepEqual(doubleMetaphone("UOT"), "0T");
    });
    it("should tansform UU's into U", () => {
      assert.deepEqual(doubleMetaphone("TUU"), "TU");
      assert.deepEqual(doubleMetaphone("UU"), 'U');
      assert.deepEqual(doubleMetaphone("UUT"), "UT");
    });
    it("should tansform UY's into I", () => {
      assert.deepEqual(doubleMetaphone("TUY"), "TI");
      assert.deepEqual(doubleMetaphone("UY"), 'I');
      assert.deepEqual(doubleMetaphone("UYT"), "IT");
    });
    it("should tansform U's into 0", () => {
      assert.deepEqual(doubleMetaphone("TU"), "T0");
      assert.deepEqual(doubleMetaphone("U"), '0');
      assert.deepEqual(doubleMetaphone("UT"), "0T");
    });
    // Q transformes
    it("should tansform --QUE's into KWU", () => {
      assert.deepEqual(doubleMetaphone("TQUE"), "TKWU"); //// need to fix
      assert.deepEqual(doubleMetaphone("QUE"), 'KWU');
    });
    it("should tansform QUE--'s into KW", () => {
      assert.deepEqual(doubleMetaphone("TQUET"), "TKWT"); //// need to fix
    });
  });
  // Y vowel Transforms
  describe("Y as a vowel transforms", () => {
    it("should tansform YA's into 10", () => {
      assert.deepEqual(doubleMetaphone("TYA"), "T10");
      assert.deepEqual(doubleMetaphone("YA"), '10');
      assert.deepEqual(doubleMetaphone("YAT"), "10T");
    });
    it("should tansform YE's into 1E", () => {
      assert.deepEqual(doubleMetaphone("TYE"), "T1E");
      assert.deepEqual(doubleMetaphone("YE"), '1E');
      assert.deepEqual(doubleMetaphone("YET"), "1ET");
    });
    it("should tansform YI's into 11", () => {
      assert.deepEqual(doubleMetaphone("TYI"), "T11");
      assert.deepEqual(doubleMetaphone("YI"), '11');
      assert.deepEqual(doubleMetaphone("YIT"), "11T");
    });
    it("should tansform YO's into 10", () => {
      assert.deepEqual(doubleMetaphone("TYO"), "T1O");
      assert.deepEqual(doubleMetaphone("YO"), '1O');
      assert.deepEqual(doubleMetaphone("YOT"), "1OT");
    });
    it("should tansform YU's into U", () => {
      assert.deepEqual(doubleMetaphone("TYU"), "TU");
      assert.deepEqual(doubleMetaphone("YU"), 'U');
      assert.deepEqual(doubleMetaphone("YUT"), "UT");
    });
    it("should tansform Y's into 1", () => {
      assert.deepEqual(doubleMetaphone("TY"), "T1");
      assert.deepEqual(doubleMetaphone("Y"), '1');
      assert.deepEqual(doubleMetaphone("YT"), "1T");
    });
  });
});

  /////***Consonant Tests***\\\\\
describe("doubleMetaphone(value) for consonants", () => {
  // B transforms
  describe("B transformations", () => {
    it("should tansform B's into P", () => {
      assert.deepEqual(doubleMetaphone("TB"), "TP");
      assert.deepEqual(doubleMetaphone("B"), 'P');
      assert.deepEqual(doubleMetaphone("BT"), "PT");
    });
    it("should tansform BB's into P", () => {
      assert.deepEqual(doubleMetaphone("TBB"), "TP");
      assert.deepEqual(doubleMetaphone("BB"), 'P');
      assert.deepEqual(doubleMetaphone("BBT"), "PT");
    });
  });

  //C Transforms
  describe("C Transforms", () => {
    describe("Germanic ACH transforms", () => {
      it("should make ACH into 0K", () => {
        assert.deepEqual(doubleMetaphone("ACHT"), "0KT");
        assert.deepEqual(doubleMetaphone("TACHT"), "T0KT");
        assert.deepEqual(doubleMetaphone("AACHT"), "0KT");
        assert.deepEqual(doubleMetaphone("ACHT"), "0KT");
        assert.deepEqual(doubleMetaphone("MACHER"), "M0X1R");
        assert.deepEqual(doubleMetaphone("BACHER"), "P0X1R");
      });
    }); //end Germanic
    describe("Special case for Gaius Julius Caesar", () => {
      it("should account for special case of the emeperor", () => {
        assert.deepEqual(doubleMetaphone("CAESAR"), "SES0R");
      });
    }); //end ceasar specail case
  });
});
