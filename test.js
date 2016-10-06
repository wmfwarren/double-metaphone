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
      assert.equal(doubleMetaphone("TAU"), "T0");
      assert.equal(doubleMetaphone("AU"), '0');
      assert.equal(doubleMetaphone("AUT"), "0T");
    });
    it("should tansform A's into 0's", () => {
      assert.equal(doubleMetaphone("TA"), "T0");
      assert.equal(doubleMetaphone("A"), '0');
      assert.equal(doubleMetaphone("AT"), "0T");
    });
  });
  // E Transforms
  describe("E vowel transforms", () => {
    describe("Trailing E's", () => {
      it("should drop trailing E's if not preceeded by H", () => {
        assert.equal(doubleMetaphone("HTE"), 'T');
      });
      it("should make --HE into --E unless HE then HE", () => {
        assert.equal(doubleMetaphone("JHE"), 'JE');
        assert.equal(doubleMetaphone("HE"), 'HE');
      });
      it("should drop trailing E's proceeded by A", () => {
        assert.equal(doubleMetaphone("ATED"), 'ATT');
        assert.equal(doubleMetaphone("ATES"), 'ATS');
        assert.equal(doubleMetaphone("TATE"), 'TAT');
        assert.equal(doubleMetaphone("ATE"), 'AT');
      });
      it("should drop trailing E's proceeded by E", () => {
        assert.equal(doubleMetaphone("ETED"), 'ETT');
        assert.equal(doubleMetaphone("ETES"), 'ETS');
        assert.equal(doubleMetaphone("TETE"), 'TET');
        assert.equal(doubleMetaphone("ETE"), 'ET');
      });
      it("should drop trailing E's proceeded by I", () => {
        assert.equal(doubleMetaphone("ITED"), 'ITT');
        assert.equal(doubleMetaphone("ITES"), 'ITS');
        assert.equal(doubleMetaphone("TITE"), 'TIT');
        assert.equal(doubleMetaphone("ITE"), 'IT');
      });
      it("should drop trailing E's proceeded by O", () => {
        assert.equal(doubleMetaphone("OTED"), 'OTT');
        assert.equal(doubleMetaphone("OTES"), 'OTS');
        assert.equal(doubleMetaphone("TOTE"), 'TOT');
        assert.equal(doubleMetaphone("OTE"), 'OT');
      });
      it("should drop trailing E's proceeded by U", () => {
        assert.equal(doubleMetaphone("UTED"), 'UTT');
        assert.equal(doubleMetaphone("UTES"), 'UTS');
        assert.equal(doubleMetaphone("TUTE"), 'TUT');
        assert.equal(doubleMetaphone("UTE"), 'UT');
      });
    });
    it("should transform EA's into E's ", () => {
      assert.equal(doubleMetaphone("TEA"), "TE");
      assert.equal(doubleMetaphone("EA"), 'E');
      assert.equal(doubleMetaphone("EAT"), "ET");
    });
    it("should transform EE's into E's ", () => {
      assert.equal(doubleMetaphone("TEE"), "TE");
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
        assert.equal(doubleMetaphone("TE"), "T");
        assert.equal(doubleMetaphone("E"), '');
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
      // assert.equal(doubleMetaphone("TJIU"), "TJ0"); /////////Needs a check
      assert.equal(doubleMetaphone("JIU"), 'J0')
      assert.equal(doubleMetaphone("JIUT"), "J0T");
    });
    it("should tansform trailing I's to E ", () => {
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
    it("should tansform UGH's into U", () => {
      assert.equal(doubleMetaphone("TUGH"), "TU");
      assert.equal(doubleMetaphone("UGH"), 'U');
      assert.equal(doubleMetaphone("UGHT"), "UT");
    });
    it("should not tansform OUGH's into U", () => {
      assert.equal(doubleMetaphone("TOUGH"), "T0F");
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
  describe("B transforms", () => {
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
        assert.equal(doubleMetaphone("TIGHT"), 'TIT');
        assert.equal(doubleMetaphone("GHT"), "KT");
        assert.equal(doubleMetaphone("GHAT"), "K0T");
      });
    });
    describe("G.I is at the start is should become a J otherwise K", () => {
      it("should make GHIT", () => {
        assert.equal(doubleMetaphone("GHIT"), "JIT");
      });
      it("should make IGHIT", () => {
        assert.equal(doubleMetaphone("IGHIT"), "IIT");
      });
      it("should make IGHT", () => {
        assert.equal(doubleMetaphone("IGHT"), "IT");
      });
      it("should make GHT", () => {
        assert.equal(doubleMetaphone("GHT"), "KT");
      });
    });
    describe("Parker's rule G tests", () => {
      describe("[BHD]UGH drops the GH", () => {
        it("should make BUGH into PU", () => {
          assert.equal(doubleMetaphone("BUGH"), "PU");
        });
        it.skip("should make HUGH into PU", () => {
          assert.equal(doubleMetaphone("HUGH"), "HU");
        });
        it("should make DUGH into PU", () => {
          assert.equal(doubleMetaphone("DUGH"), "TU");
        });
      });
      describe("[BHD]OUGH drops the GH", () => {
        it("should make BUGH into PU", () => {
          assert.equal(doubleMetaphone("BOUGH"), "P0");
        });
        it("should make HUGH into PU", () => {
          assert.equal(doubleMetaphone("HOUGH"), "H0");
        });
        it("should make DUGH into PU", () => {
          assert.equal(doubleMetaphone("DOUGH"), "T0");
        });
      });
      describe("[BHD]ROUGH drops the GH", () => {
        it("should make BUGH into PU", () => {
          assert.equal(doubleMetaphone("BROUGH"), "PR0");
        });
        it("should make HUGH into PU", () => {
          assert.equal(doubleMetaphone("HROUGH"), "R0");
        });
      });
    });
    describe("G for F rule", () => {
      describe("AUGH endings", () => {
        it("should make the GH into an F", () => {
          assert.equal(doubleMetaphone("LAUGH"), "L0F");
        });
      });
      describe("OUGH endings", () => {
        it("should make the GH into an F", () => {
          assert.equal(doubleMetaphone("TOUGH"), "T0F");
        });
      });
    });//end parkers rule for G
    describe("GN TO N", () => {
      it("should make GN at the beginning of a word into N", () => {
        assert.equal(doubleMetaphone("GNAT"), "N0T");
      });
      it("should make GN after a Vowel into N", () => {
        assert.equal(doubleMetaphone("SIGN"), "SIN");
      });
    });
    describe("--GNEY words", () => {
      it("should make CAGNEY into K0KNE", () => {
        assert.equal(doubleMetaphone("CAGNEY"), "K0KNE");
        assert.equal(doubleMetaphone("TGNEY"), "TKNE");
      });
    });
    describe("Words like GYM", () => {
      it("should make GYM into J1M", () => {
        assert.equal(doubleMetaphone("GYM"), "J1M");
      });
    });
    describe("Other Language Gs", () => {
      it ("should make G's into Js and Ks", () => {
        assert.equal(doubleMetaphone("BIAGGI"), "PI0JE");
        assert.equal(doubleMetaphone("TGIER"), "TJ1R");
        assert.equal(doubleMetaphone("GET"), "K1T");
        assert.equal(doubleMetaphone("GETTING"), "K1T1NK");
      });
    });
    describe("GG to K", () => {
      it("should make GG into K", () => {
        assert.equal(doubleMetaphone("GG"), "K");
      });
    });
    describe("G to K", () => {
      it("should make Gs into Ks", () => {
        assert.equal(doubleMetaphone("G"), "K");
        assert.equal(doubleMetaphone("TG"), "TK");
        assert.equal(doubleMetaphone("GT"), "KT");
      });
    });
  });//end of G block
  describe("H transforms", () => {
    it("should keep Hs the beginning of a word followed by a vowel", () => {
      assert.equal(doubleMetaphone("HAT"), "H0T");
      assert.equal(doubleMetaphone("HTAT"), "T0T");
    });
    it("should keep Hs between two vowels but not consonants", () => {
      assert.equal(doubleMetaphone("IHAT"), "1H0T");
      assert.equal(doubleMetaphone("THTAT"), "2T0T");
    });
  }); //end H tests
  describe("J transforms", () => {
    it("should make JOSE into  H0S", () => {
      assert.equal(doubleMetaphone("JOSE"), "HOS");
    });
    it("should make JOSE H0S", () => {
      assert.equal(doubleMetaphone("JOSE"), "HOS");
    });
  });
  describe("K transforms", () => {
    it("should make K into K", () => {
      assert.equal(doubleMetaphone("TK"), 'TK');
      assert.equal(doubleMetaphone("K"), 'K');
      assert.equal(doubleMetaphone("KT"), 'KT');
    });
    it("should make KK into K", () => {
      assert.equal(doubleMetaphone("TKK"), 'TK');
      assert.equal(doubleMetaphone("KK"), 'K');
      assert.equal(doubleMetaphone("KKT"), 'KT');
    });
  });
  describe("L transforms", () => {
    it("should make LL into L", () => {
      assert.equal(doubleMetaphone("LL"), 'L');
      assert.equal(doubleMetaphone("TLL"), 'TL');
      assert.equal(doubleMetaphone("LLT"), 'LT');
      assert.equal(doubleMetaphone("TLLT"), 'TLT');
      assert.equal(doubleMetaphone("ALLA"), '0L0');
    });
  });
  describe("M transforms", () => {
    describe("-UMB to UB", () => {
      it("should make DUMB info T0M", () => {
        assert.equal(doubleMetaphone("DUMB"), "T0M");
        assert.equal(doubleMetaphone("THUMB"), "20M");
      });
    });
    describe("MM to M", () => {
      it("should make TOMM info T0M", () => {
        assert.equal(doubleMetaphone("TOMM"), "T0M");
      });
    });
  });
  describe("N Transforms", () => {
    it("should make TONN info T0N", () => {
      assert.equal(doubleMetaphone("TONN"), "T0N");
    });
    it("should make N into N", () => {
      assert.equal(doubleMetaphone("TN"), "TN");
      assert.equal(doubleMetaphone("N"), "N");
      assert.equal(doubleMetaphone("NT"), "NT");
    });
  });
  describe("P Transforms", () => {
    describe("PH to F", () => {
      it("should make PH into F", () => {
        assert.equal(doubleMetaphone("TPH"), "TF");
        assert.equal(doubleMetaphone("PH"), "F");
        assert.equal(doubleMetaphone("PHT"), "FT");
      });
    });
    describe("PP to P", () => {
      it("should make PP to P", () => {
        assert.equal(doubleMetaphone("TPP"), "TP");
        assert.equal(doubleMetaphone("PP"), "P");
        assert.equal(doubleMetaphone("PPT"), "PT");
      });
    });
    describe("P to P", () => {
      it("should make P into P", () => {
        assert.equal(doubleMetaphone("TP"), "TP");
        assert.equal(doubleMetaphone("P"), "P");
        assert.equal(doubleMetaphone("PT"), "PT");
      });
    });
    describe("Special cases of P--", () => {
      it("should make PB into B", () => {
        assert.equal(doubleMetaphone("CAMPBELL"), "K0MP1L");
        assert.equal(doubleMetaphone("RASPBERRY"), "R0SP1RE");
      });
    });
  });
  describe("Q transforms", () => {
    it("should make Q into K", () => {
      assert.equal(doubleMetaphone("TQ"), "TK");
      assert.equal(doubleMetaphone("Q"), "K");
      assert.equal(doubleMetaphone("QT"), "KT");
    });
  });
  describe("R transforms", () => {
    it("should make RR into R", () => {
      assert.equal(doubleMetaphone("RR"), "R");
      assert.equal(doubleMetaphone("TRR"), "TR");
      assert.equal(doubleMetaphone("RRT"), "RT");
    });
    it("should make R into R", () => {
      assert.equal(doubleMetaphone("R"), "R");
      assert.equal(doubleMetaphone("TR"), "TR");
      assert.equal(doubleMetaphone("RT"), "RT");
    });
  });
  describe("S Transforms", () => {
    describe("Silent S following I or Y should be removed if preceeding an L", () => {
      it("should make ISLAND into IL0NT", () => {
        assert.equal(doubleMetaphone("ISLAND"), "IL0NT");
      });
      it("should make IYLAND into IL0NT", () => {
        assert.equal(doubleMetaphone("ISLAND"), "IL0NT");
      });
      it("should make AISLE into AIL", () => {
        assert.equal(doubleMetaphone("AISLE"), "IL");
      });
    });
    describe("shoudl count for special case SUGAR--", () => {
      it("should make SUGARMOMMA into X0K0RM0M0", () => {
        assert.equal(doubleMetaphone("SUGARMOMMA"), "X0K0RM0M0");
      });
    });
    describe("SH Strings", () => {
      it("should make english SH into a X", () => {
        assert.equal(doubleMetaphone("ENGLISH"), "1NKL1X");
        assert.equal(doubleMetaphone("SHOUT"), "X0T");
      });
      it("should make germanic SH into a X", () => {
        assert.equal(doubleMetaphone("SHEIM"), "SEM");
        assert.equal(doubleMetaphone("SHOEK"), "SOK");
        assert.equal(doubleMetaphone("SHOLM"), "S0LM");
        assert.equal(doubleMetaphone("SHOLZ"), "S0LS");
      });
    });
    describe("S[VOWEL]", () => {
      it("should make SIO into SI0", () => {
        assert.equal(doubleMetaphone("SIOT"), "S0T");
      });
      it("should make SIA into SI0", () => {
        assert.equal(doubleMetaphone("SIAT"), "SI0T");
      });
    });
    describe("Germanic and Slavic S+Consonant", () => {
      it("should make SZEET to SET", () => {
        assert.equal(doubleMetaphone("SZEET"), "SET");
      });
      it("should make TSZEET to TSET", () => {
        assert.equal(doubleMetaphone("TSZEET"), "TSET");
      });
      it("should make SLEET to SET", () => {
        assert.equal(doubleMetaphone("SLEET"), "SLET");
      });
      it("should make SMEET to SET", () => {
        assert.equal(doubleMetaphone("SMEET"), "SMET");
      });
      it("should make SNEET to SET", () => {
        assert.equal(doubleMetaphone("SNEET"), "SNET");
      });
      it("should make SWEET to SET", () => {
        assert.equal(doubleMetaphone("SWEET"), "SWET");
      });
    });
    describe("SC--", () => {
      describe("SCH--", () => {
        it("should make sch with dutch origin into X", () => {
          assert.equal(doubleMetaphone("SCHERMERHORN"), "X1RM1R0RN");
          assert.equal(doubleMetaphone("SCHENKER"), "X1NK1R");
          assert.equal(doubleMetaphone("SCHAL"), "X0L");
        });
        it("should make sch with no dutch origin into SK", () => {
          assert.equal(doubleMetaphone("SCHOOL"), "SK0L");
        });
      });
      describe("SC[IEY]", () => {
        it("should make SCIT int S1T", () => {
          assert.equal(doubleMetaphone("SCIT"), "S1T");
        });
        it("should make SCET int S1T", () => {
          assert.equal(doubleMetaphone("SCET"), "S1T");
        });
        it("should make SCYT int S1T", () => {
          assert.equal(doubleMetaphone("SCYT"), "S1T");
        });
      });
      describe("SC-- to SK otherwise", () => {
        it("should make SCAT into SK0T", () => {
          assert.equal(doubleMetaphone("SCAT"), "SK0T");
          assert.equal(doubleMetaphone("TSCAT"), "TSK0T");
          assert.equal(doubleMetaphone("SCT"), "SKT");
        });
      });
    });
    it("should make S into S", () => {
      assert.equal(doubleMetaphone("ST"), "ST");
      assert.equal(doubleMetaphone("S"), "S");
      assert.equal(doubleMetaphone("TS"), "TS");
    });
    it("should make SS into S", () => {
      assert.equal(doubleMetaphone("SST"), "ST");
      assert.equal(doubleMetaphone("SS"), "S");
      assert.equal(doubleMetaphone("TSS"), "TS");
    });
  });
  describe("T Transforms", () => {
    it("Should Mat --TION-- int X", () => {
      assert.equal(doubleMetaphone("TION"), "XN");
      assert.equal(doubleMetaphone("ATION"), "0XN");
      assert.equal(doubleMetaphone("TIONT"), "XNT");
    });
    it("Should Mat CATCH int K0X", () => {
      assert.equal(doubleMetaphone("CATCH"), "K0X");
    });
    it("should handle THOMAS to T0M0S", () => {
      assert.equal(doubleMetaphone("THOMAS"), "T0M0S");
    });
    it("should handle THAMES to T0M1S", () => {
      assert.equal(doubleMetaphone("THAMES"), "TAMS");
    });
    it("Should make TD into T", () => {
      assert.equal(doubleMetaphone("HOTDOG"), "H0T0K");
    });
    it("Should make TT into T", () => {
      assert.equal(doubleMetaphone("HATT"), "H0T");
      assert.equal(doubleMetaphone("TTAH"), "T0");
      assert.equal(doubleMetaphone("TT"), 'T');
    });
  });
  describe("V transforms", () => {
    it("Should make V into F", () => {
      assert.equal(doubleMetaphone("VT"), "FT");
      assert.equal(doubleMetaphone("V"), "F");
      assert.equal(doubleMetaphone("TV"), "TF");
    });
    it("Should make VV into F", () => {
      assert.equal(doubleMetaphone("VVT"), "FT");
      assert.equal(doubleMetaphone("VV"), "F");
      assert.equal(doubleMetaphone("TVV"), "TF");
    });
  });
  describe("W Transfroms", () => {
    describe("Silent Ws", () => {
      it("should make WR into R", () => {
        assert.equal(doubleMetaphone("WREN"), "R1N");
        assert.equal(doubleMetaphone("WRAP"), "R0P");
        assert.equal(doubleMetaphone("TWRAP"), "TR0P");
      });
    });
    it("Should test the W in Polish words liek Filipowicz", () => {
      assert.equal(doubleMetaphone("Filipowicz"), "F1L1P0TS");
    });
  });
  describe("X Transfroms", () => {
    it("should make French AUX into ", () => {
      assert.equal(doubleMetaphone("AUXILIARY"), "0KS1LI0RE");
      assert.equal(doubleMetaphone("FAUX"), "FO");
      assert.equal(doubleMetaphone("BREAUX"), "PR1O");
    });
    it("X transforms", () => {
      assert.equal(doubleMetaphone("EXCITE"), "1KSIT");
      assert.equal(doubleMetaphone("EXXITE"), "1KSIT");
      assert.equal(doubleMetaphone("EX"), "1KS");
    });
  });
  describe("Z Transforms", () => {
    it("should make the Chinese ZH into J", () => {
      assert.equal(doubleMetaphone("ZHOU"), "J0");
    });
    it("should make ZZ into S", () => {
      assert.equal(doubleMetaphone("ZZ"), "S");
      assert.equal(doubleMetaphone("TZZ"), "TS");
      assert.equal(doubleMetaphone("ZZT"), "ST");
    });
    it("should make Z into S", () => {
      assert.equal(doubleMetaphone("Z"), "S");
      assert.equal(doubleMetaphone("TZ"), "TS");
      assert.equal(doubleMetaphone("ZT"), "ST");
    });
  });
  describe.skip("Long word Demonstrations", () => {
    it("should fail 1 'LIMINAL'", () => {
      assert.equal(doubleMetaphone("LIMINAL"), 1);
    });
    it("should fail 2 'OPERATIC'", () => {
      assert.equal(doubleMetaphone("OPERATIC"), 1);
    });
    it("should fail 3 'GREGARIOUS'", () => {
      assert.equal(doubleMetaphone("GREGARIOUS"), 1);
    });
    it("should fail 4 'FELONIOUS'", () => {
      assert.equal(doubleMetaphone("FELONIOUS"), 1);
    });
    it("should fail 5 'PREIPHERY'", () => {
      assert.equal(doubleMetaphone("PERIPHERY"), 1);
    });
    it("should fail 6 'GARAGE'", () => {
      assert.equal(doubleMetaphone("GARAGE"), 1);
    });
    it("should fail 7 'LIEUTENANT'", () => {
      assert.equal(doubleMetaphone("LIEUTENANT"), 1);
    });
    it("should fail 8 'SANGUINE'", () => {
      assert.equal(doubleMetaphone("SANGUINE"), 1);
    });
    it("should fail 9 'CADMIUM'", () => {
      assert.equal(doubleMetaphone("CADMIUM"), 1);
    });
    it("should fail 10 'THE'", () => {
      assert.equal(doubleMetaphone("THE"), 1);
    });
    it("should fail 11 'DAMN'", () => { ////////////Need a fix for MN
      assert.equal(doubleMetaphone("DAMN"), 1);
    });
  });
});// Main describe block
