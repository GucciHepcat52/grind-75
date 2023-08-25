function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  var freq = new Array(26).fill(0);
  for (var i = 0; i < s.length; i++) {
    console.log(freq);
    freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    console.log(freq);
    freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    console.log(freq);
  }

  for (var i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) {
      return false;
    }
  }

  return true;

  // ---------- THE COMMENTED CODE BELOW ALSO WORKS ---------- //

  // const regex = /[\W0-9]/g;
  // const newFirst = first.replace(regex, "");
  // const newSecond = second.replace(regex, "");

  // const firstArrayOrdered = newFirst.split("").sort();
  // const secondArrayOrdered = newSecond.split("").sort();

  // if (firstArrayOrdered.length !== secondArrayOrdered.length) {
  //   return false;
  // }

  // let counter = 0;

  // while (counter < firstArrayOrdered.length) {
  //   if (firstArrayOrdered[counter] !== secondArrayOrdered[counter]) {
  //     return false;
  //   }

  //   counter++;
  // }

  // return true;
}

isAnagram("anagram", "nagaram");
