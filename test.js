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
      assert.equal(doubleMetaphone("TAA"), "T0");
      assert.equal(doubleMetaphone("AA"), '0');
      assert.equal(doubleMetaphone("AAT"), "0T");
    });
    it("should tansform AO's into 0", () => {
      assert.equal(doubleMetaphone("TAO"), "T0");
      assert.equal(doubleMetaphone("AO"), '0');
      assert.equal(doubleMetaphone("AOT"), "0T");
    });
    it("should tansform AE's into A's", () => {
      assert.equal(doubleMetaphone("TAE"), "TA");
      assert.equal(doubleMetaphone("AE"), 'A');
      assert.equal(doubleMetaphone("AET"), "AT");
    });
    it("should tansform AI's into A's", () => {
      assert.equal(doubleMetaphone("TAI"), "TA");
      assert.equal(doubleMetaphone("AI"), 'A');
      assert.equal(doubleMetaphone("AIT"), "AT");
    });
    it("should tansform AY's into A's", () => {
      assert.equal(doubleMetaphone("TAY"), "TA");
      assert.equal(doubleMetaphone("AY"), 'A');
      assert.equal(doubleMetaphone("AYT"), "AT");
    });
    it("should tansform AU's into OW's", () => {
      assert.equal(doubleMetaphone("TAU"), "T0W");
      assert.equal(doubleMetaphone("AU"), '0W');
      assert.equal(doubleMetaphone("AUT"), "0WT");
    });
    it("should tansform A's into 0's", () => {
      assert.equal(doubleMetaphone("TA"), "T0");
      assert.equal(doubleMetaphone("A"), '0');
      assert.equal(doubleMetaphone("AT"), "0T");
    });
  });
  // E Transforms
  describe("E vowel transforms", () => {
    it("should transform EA's into E's ", () => {
      assert.equal(doubleMetaphone("TEA"), "TE");
      assert.equal(doubleMetaphone("EA"), 'E');
      assert.equal(doubleMetaphone("EAT"), "ET");
    });
    it("should transform EE's into E's ", () => {
      assert.equal(doubleMetaphone("TEE"), "TE");
      assert.equal(doubleMetaphone("EE"), 'E');
      assert.equal(doubleMetaphone("EET"), "ET");
    });
    it("should transform EI's into E's ", () => {
      assert.equal(doubleMetaphone("TEI"), "TE");
      assert.equal(doubleMetaphone("EI"), 'E');
      assert.equal(doubleMetaphone("EIT"), "ET");
    });
    it("should transform EO's into EO's ", () => {
      assert.equal(doubleMetaphone("TEO"), "TEO");
      assert.equal(doubleMetaphone("EO"), 'EO');
      assert.equal(doubleMetaphone("EOT"), "EOT");
    });
    it("should transform EU's into U's if at the start of the word ", () => {
      assert.equal(doubleMetaphone("EUT"), "UT");
      assert.equal(doubleMetaphone("EU"), "U");
    });
    it("should transform EU's into 0's if not at start of word", () => {
      assert.equal(doubleMetaphone("TEU"), "T0");
      assert.equal(doubleMetaphone("TEUT"), "T0T");
    });
    it("should transform EY's into E's ", () => {
      assert.equal(doubleMetaphone("TEY"), "TE");
      assert.equal(doubleMetaphone("EY"), 'E');
      assert.equal(doubleMetaphone("EYT"), "ET");
    });
    it("should transform E's to 1's", () => {
        assert.equal(doubleMetaphone("TE"), "T1");
        assert.equal(doubleMetaphone("E"), '1');
        assert.equal(doubleMetaphone("ET"), "1T");
      });
    });
  // I Transforms
  describe("I vowel transforms", () => {
    it("should transform GHI into I", () => {
      assert.equal(doubleMetaphone("GHIT"), 'JIT');
    });
    it("should tansform IA's into I0", () => {
      assert.equal(doubleMetaphone("TIA"), "X");
      assert.equal(doubleMetaphone("IA"), 'I0');
      assert.equal(doubleMetaphone("IAT"), "I0T");
    });
    it("should tansform IO's into 0", () => {
      assert.equal(doubleMetaphone("TIO"), "T0");
      assert.equal(doubleMetaphone("IO"), '0');
      assert.equal(doubleMetaphone("IOT"), "0T");
    });
    it("should tansform IE's into I's", () => {
      assert.equal(doubleMetaphone("TIE"), "TI");
      assert.equal(doubleMetaphone("IE"), 'I');
      assert.equal(doubleMetaphone("IET"), "IT");
    });
    it("should tansform II's into I's", () => {
      assert.equal(doubleMetaphone("TII"), "TI");
      assert.equal(doubleMetaphone("II"), 'I');
      assert.equal(doubleMetaphone("IIT"), "IT");
    });
    it("should tansform IY's into A's", () => {
      assert.equal(doubleMetaphone("TIY"), "TIY");
      assert.equal(doubleMetaphone("IY"), 'IY');
      assert.equal(doubleMetaphone("IYT"), "IYT");
    });
    it("should tansform IU's followed by M into E0's", () => {
      assert.equal(doubleMetaphone("TIUM"), "TE0M");
      assert.equal(doubleMetaphone("IUM"), 'E0M');
      assert.equal(doubleMetaphone("IUMT"), "E0MT");
    });
    it("should tansform IU's followed by S into E0's", () => {
      assert.equal(doubleMetaphone("TIUS"), "TE0S");
      assert.equal(doubleMetaphone("IUS"), 'E0S');
      assert.equal(doubleMetaphone("IUST"), "E0ST");
    });
    it("should tansform IU's proceeded by an L into 0's", () => {
      assert.equal(doubleMetaphone("TLIU"), "TL0");
      assert.equal(doubleMetaphone("LIU"), 'L0');
      assert.equal(doubleMetaphone("LIUT"), "L0T");
    });
    it("should tansform IU's proceeded by a J into 0's", () => {
      assert.equal(doubleMetaphone("TJIU"), "TJ0");
      assert.equal(doubleMetaphone("JIU"), 'J0') /////////Needs a check
      assert.equal(doubleMetaphone("JIUT"), "J0T");
    });
    it("should tansform trailing I's to E", () => {
      assert.equal(doubleMetaphone("TI"), "TE");
    });
    it("should make ICH into ICH ", () => {
      assert.equal(doubleMetaphone("TICHT"), "TIKT");
    });
  });
  // O transforms
  describe("O vowel Transforms", () => {
    it("should tansform OA's into O", () => {
      assert.equal(doubleMetaphone("TOA"), "TO");
      assert.equal(doubleMetaphone("OA"), 'O');
      assert.equal(doubleMetaphone("OAT"), "OT");
    });
    it("should tansform OE's into O", () => {
      assert.equal(doubleMetaphone("TOE"), "TO");
      assert.equal(doubleMetaphone("OE"), 'O');
      assert.equal(doubleMetaphone("OET"), "OT");
    });
    it("should tansform OI's into OE", () => {
      assert.equal(doubleMetaphone("TOI"), "TOE");
      assert.equal(doubleMetaphone("OI"), 'OE');
      assert.equal(doubleMetaphone("OIT"), "OET");
    });
    it("should tansform OO's into 0", () => {
      assert.equal(doubleMetaphone("TOO"), "T0");
      assert.equal(doubleMetaphone("OO"), '0');
      assert.equal(doubleMetaphone("OOT"), "0T");
    });
    it("should tansform OU's into 0", () => {
      assert.equal(doubleMetaphone("TOU"), "T0");
      assert.equal(doubleMetaphone("OU"), '0');
      assert.equal(doubleMetaphone("OUT"), "0T");
    });
    it("should tansform OY's into OY", () => {
      assert.equal(doubleMetaphone("TOY"), "TOY");
      assert.equal(doubleMetaphone("OY"), 'OY');
      assert.equal(doubleMetaphone("OYT"), "OYT");
    });
    it("should tansform O's into 0", () => {
      assert.equal(doubleMetaphone("TO"), "T0");
      assert.equal(doubleMetaphone("O"), '0');
      assert.equal(doubleMetaphone("OT"), "0T");
    });
  });
  // U vowel Transforms
  describe("U vowel Transforms", () => {
    it("should tansform UA's into 0", () => {
      assert.equal(doubleMetaphone("TUA"), "T0", "T0");
      assert.equal(doubleMetaphone("UA"), '0', '0');
      assert.equal(doubleMetaphone("UAT"), "0T", "0T");
    });
    it("should tansform UE's into U", () => {
      assert.equal(doubleMetaphone("TUE"), "TU", "TU");
      assert.equal(doubleMetaphone("UE"), 'U', 'U');
      assert.equal(doubleMetaphone("UET"), "UT", "UT");
    });
    it("should tansform UI's into 0", () => {
      assert.equal(doubleMetaphone("TUI"), "T0");
      assert.equal(doubleMetaphone("UI"), '0');
      assert.equal(doubleMetaphone("UIT"), "0T");
    });
    it("should tansform U0's into 0", () => {
      assert.equal(doubleMetaphone("TUO"), "T0");
      assert.equal(doubleMetaphone("UO"), '0');
      assert.equal(doubleMetaphone("UOT"), "0T");
    });
    it("should tansform UU's into U", () => {
      assert.equal(doubleMetaphone("TUU"), "TU");
      assert.equal(doubleMetaphone("UU"), 'U');
      assert.equal(doubleMetaphone("UUT"), "UT");
    });
    it("should tansform UY's into I", () => {
      assert.equal(doubleMetaphone("TUY"), "TI");
      assert.equal(doubleMetaphone("UY"), 'I');
      assert.equal(doubleMetaphone("UYT"), "IT");
    });
    it("should tansform U's into 0", () => {
      assert.equal(doubleMetaphone("TU"), "T0");
      assert.equal(doubleMetaphone("U"), '0');
      assert.equal(doubleMetaphone("UT"), "0T");
    });
    // Q transformes
    it.skip("should tansform --QUE's into KWU", () => {
      assert.equal(doubleMetaphone("TQUE"), "TKU"); //// need to fix
      assert.equal(doubleMetaphone("QUE"), 'KU');
    });
    it.skip("should tansform QUE--'s into KW", () => {
      assert.equal(doubleMetaphone("TQUET"), "TKT"); //// need to fix
    });
  });
  // Y vowel Transforms
  describe("Y as a vowel transforms", () => {
    it("should tansform YA's into 10", () => {
      assert.equal(doubleMetaphone("TYA"), "T10");
      assert.equal(doubleMetaphone("YA"), '10');
      assert.equal(doubleMetaphone("YAT"), "10T");
    });
    it("should tansform YE's into 1E", () => {
      assert.equal(doubleMetaphone("TYE"), "T1E");
      assert.equal(doubleMetaphone("YE"), '1E');
      assert.equal(doubleMetaphone("YET"), "1ET");
    });
    it("should tansform YI's into 11", () => {
      assert.equal(doubleMetaphone("TYI"), "T11");
      assert.equal(doubleMetaphone("YI"), '11');
      assert.equal(doubleMetaphone("YIT"), "11T");
    });
    it("should tansform YO's into 10", () => {
      assert.equal(doubleMetaphone("TYO"), "T1O");
      assert.equal(doubleMetaphone("YO"), '1O');
      assert.equal(doubleMetaphone("YOT"), "1OT");
    });
    it("should tansform YU's into U", () => {
      assert.equal(doubleMetaphone("TYU"), "TU");
      assert.equal(doubleMetaphone("YU"), 'U');
      assert.equal(doubleMetaphone("YUT"), "UT");
    });
    it("should tansform Y's into 1, unless is at end of word then transform to E", () => {
      assert.equal(doubleMetaphone("TY"), "TE");
      assert.equal(doubleMetaphone("Y"), 'E');
      assert.equal(doubleMetaphone("YT"), "1T");
    });
  });
});

  /////***Consonant Tests***\\\\\
describe("doubleMetaphone(value) for consonants", () => {
  // B transforms
  describe("B transformations", () => {
    it("should tansform B's into P", () => {
      assert.equal(doubleMetaphone("TB"), "TP");
      assert.equal(doubleMetaphone("B"), 'P');
      assert.equal(doubleMetaphone("BT"), "PT");
    });
    it("should tansform BB's into P", () => {
      assert.equal(doubleMetaphone("TBB"), "TP");
      assert.equal(doubleMetaphone("BB"), 'P');
      assert.equal(doubleMetaphone("BBT"), "PT");
    });
  });

  //C Transforms
  describe("C Transforms", () => {
    describe("Germanic ACH transforms", () => {
      it("should make ACH into 0K", () => {
        assert.equal(doubleMetaphone("ACHT"), "0KT");
        assert.equal(doubleMetaphone("TACHT"), "T0KT");
        assert.equal(doubleMetaphone("AACHT"), "0KT");
        assert.equal(doubleMetaphone("ACHT"), "0KT");
        assert.equal(doubleMetaphone("MACHER"), "M0X1R");
        assert.equal(doubleMetaphone("BACHER"), "P0X1R");
      });
    }); //end Germanic
    describe("Special case for Gaius Julius Caesar", () => {
      it("should account for special case of the emeperor", () => {
        assert.equal(doubleMetaphone("CAESAR"), "SAS0R");
      });
    }); //end ceasar specail case
    describe("Special Case for Italian roots", () => {
      it("should make the CH in chianti into a K", () => {
        assert.equal(doubleMetaphone("CHIANTI"), "KINTE");
      });
    }); //end of itatian root leading ch
    describe("Words liks Michael", () => {
      it("should make ICH into IK", () => {
        assert.equal(doubleMetaphone("MICHAEL"), "MIKAL");
      });
    }); //end of Michael test
    describe("Green starting CH", () => {
      it("should account for greek roots starting with CH", () => {
        assert.equal(doubleMetaphone("CHIA"), "KI");
        assert.equal(doubleMetaphone("CHEM"), "K1M");
        assert.equal(doubleMetaphone("CHORUS"), "K0R0S");
        assert.equal(doubleMetaphone("CHY"), "XE");
        assert.equal(doubleMetaphone("CHYM"), "K1M");
        assert.equal(doubleMetaphone("CHA"), "X0");
        assert.equal(doubleMetaphone("CHARAC"), "K0R0K");
        assert.equal(doubleMetaphone("CHARIS"), "K0R1S");
      });
    }); // end greek CH tests
    describe("should account for GERMAN and GREEK CH not at the start of strings", () => {
      it("should detect the SCH in germanic words and replace CH with X", () => {
        assert.equal(doubleMetaphone("SCHIMY"), "X1ME");
      });
      it("should sccount for greek CHs not at the front of string", () => {
        assert.equal(doubleMetaphone("ORCHID"), "0RK1T");
        assert.equal(doubleMetaphone("ORCHES"), "0RK1S");
        assert.equal(doubleMetaphone("ARCHITECT"), "0RK1T1KT");
      });
    });
    describe("Scottish MC", () => {
      it("should make leading MC into MK", () => {
        assert.equal(doubleMetaphone("MC"), "MK");
        assert.equal(doubleMetaphone("TMCT"), "TMKT");
        assert.equal(doubleMetaphone("MCH"), "MK");
        assert.equal(doubleMetaphone("MCHT"), "MKT");
        assert.equal(doubleMetaphone("TMCHT"), "TMKT");
      });
    });
    describe("CZ transforms", () => {
      it("should CZ into Z if at beginning fo the word", () => {
        assert.equal(doubleMetaphone("CZERKA"), "S1RK0");
      });
      it("should make WICZ into ", () => {
        assert.equal(doubleMetaphone("TWICZ"), "TTS");
      });
    });
    describe("CC transforms", () => {
      it("should make CCIA into XI0", () => {
        assert.equal(doubleMetaphone("TCCIA"), "TX0");
        assert.equal(doubleMetaphone("TCCIAT"), "TX0T");
      });
      it("should make MCCA into MKK0", () => {
        assert.equal(doubleMetaphone("MCCAT"), "MKK0T");
      });
      it("should make other itatian CCs into an X", () => {
        assert.equal(doubleMetaphone("TCCIT"), "TX1T");
        assert.equal(doubleMetaphone("TCCHT"), "TXT");
        assert.equal(doubleMetaphone("TCCET"), "TX1T");
        assert.equal(doubleMetaphone("TCCHUT"), "TK0T");
      });
    });
    describe("change non italian CC's to SK", () => {
      it("should change SUCCT into S0SKT etc", () => {
        assert.equal(doubleMetaphone("ACCOUNT"), "0K0NT");
        assert.equal(doubleMetaphone("ACCIT"), "0KS1T");
        assert.equal(doubleMetaphone("SUCCT"), "S0KT");
        assert.equal(doubleMetaphone("SUCCES"), "S0KS1S");
        assert.equal(doubleMetaphone("SUCCEED"), "S0KSET");
      });
    });
    describe("Italian CCI", () => {
      it("should change --CCI to ---XI", () => {
        assert.equal(doubleMetaphone("CCI"), "XE");
      });
    });
    describe("Common Consonant pairs starting with C", () => {
      it("should make CG into K", () => {
        assert.equal(doubleMetaphone("CGI"), "KE")
      });
      it("should make CK into K", () => {
        assert.equal(doubleMetaphone("CKI"), "KE")
      });
      it("should make CQ into K", () => {
        assert.equal(doubleMetaphone("CQI"), "KE")
      });
    });
  }); //C transforms
  describe("D Transforms", () => {
    describe("--DG-- Transforms", () => {
      it("should make --DGE into TJ", () => {
        assert.equal(doubleMetaphone("TDGE"), "TJ");
      });
      it("should make --DGI into TJ", () => {
        assert.equal(doubleMetaphone("TDGI"), "TJ");
      });
      it("should make --DGY into TJ", () => {
        assert.equal(doubleMetaphone("TDGY"), "TJ");
      });
      it("should make --DGA into --TKA", () => {
        assert.equal(doubleMetaphone("EDGAR"), "1TK0R");
      });
      it("should make --DGA into --TKA", () => {
        assert.equal(doubleMetaphone("EDGTR"), "1TKTR");
      });
    });
    describe("--DT-- or --DD-- into T", () => {
      it("should make DD into T", () => {
        assert.equal(doubleMetaphone("EDDTR"), "1TTR");
      });
      it("should make DT into T", () => {
        assert.equal(doubleMetaphone("EDTR"), "1TR");
      });
    });
    describe("lone D transforms", () => {
      it("should make D into T", () => {
        assert.equal(doubleMetaphone("D"), "T");
        assert.equal(doubleMetaphone("QD"), "KT");
        assert.equal(doubleMetaphone("DQ"), "TK");
      });
    });
  });
  describe("F transforms", () => {
    it("should may F into F", () => {
      assert.equal(doubleMetaphone("F"), "F");
      assert.equal(doubleMetaphone("TF"), "TF");
      assert.equal(doubleMetaphone("FT"), "FT");
    });
    it("should may FF into F", () => {
      assert.equal(doubleMetaphone("F"), "F");
    });
  });
  describe("G Transforms", () => {
    describe("if GH and not proceeded by a vowel or at start of word", () => {
      it("should make GHs into K", () => {
        assert.equal(doubleMetaphone("TGHT"), "TKT");
        assert.equal(doubleMetaphone("TIGHT"), 'T1T');
        assert.equal(doubleMetaphone("GHT"), "KT");
        assert.equal(doubleMetaphone("GHAT"), "K0T");
      });
    });
    describe("G.I is at the start is should become a J otherwise K", () => {
      it("should make GHIT", () => {
        assert.equal(doubleMetaphone("GHIT"), "JIT");
      });
      it("should make GHT", () => {
        assert.equal(doubleMetaphone("GHT"), "KT");
      });
    });
  });//end of G block
});// Main describe block
