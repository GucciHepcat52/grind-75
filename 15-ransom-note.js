function canConstruct(ransomNote, magazine) {
  const ransomNoteArray = ransomNote.split("");
  const magazineArray = magazine.split("");
  const ransomLength = ransomNoteArray.length;

  const resultArray = magazineArray.filter((letter) => {
    const ransomIndex = ransomNoteArray.indexOf(letter);
    if (ransomIndex !== -1) {
      ransomNoteArray.splice(ransomIndex, 1);
      return true;
    }
    return false;
  });

  return resultArray.length === ransomLength;
}

canConstruct("ab", "aabsdfga");
