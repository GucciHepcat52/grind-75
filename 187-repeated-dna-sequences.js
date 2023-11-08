/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let foundSequences = new Set();
  let repeatedSequences = [];
  let sequenceLength = 10;
  let stringLength = s.length;

  for (let i = 0; i < stringLength - sequenceLength + 1; i++) {
    let seq = s.substring(i, i + sequenceLength);
    if (foundSequences.has(seq)) {
      repeatedSequences.push(seq);
    }
    foundSequences.add(seq);
  }

  return repeatedSequences;
};

// [AAAAAAAAAA]AAAAAAAAAAAA
// A[AAAAAAAAAAA]AAAAAAAAAA
// AA[AAAAAAAAAAA]AAAAAAAAA
