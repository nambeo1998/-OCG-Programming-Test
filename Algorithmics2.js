var letterNoEncode = ["A", "E", "I", "O", "U", "Y", "W", "H"];
const letterEncodeMap = {
  B: 1,
  P: 1,
  F: 1,
  V: 1,
  C: 2,
  S: 2,
  K: 2,
  G: 2,
  J: 2,
  Q: 2,
  X: 2,
  Z: 2,
  D: 3,
  T: 3,
  L: 4,
  M: 5,
  N: 5,
  R: 6,
};

function isLetterNoEncode(str) {
  for (let j = 0; j < letterNoEncode.length; j++) {
    if (str === letterNoEncode[j]) {
      return true;
    }
  }
  return false;
}

function soundex(str) {
  str = str.toUpperCase();
  var result = "";
  for (let i = 0; i < str.length; i++) {
    if (result.length === 4) {
      return result;
    }
    if (i === 0) {
      result += str[i];
      continue;
    } else {
      if (isLetterNoEncode(str[i])) {
        continue;
      }
      if (letterEncodeMap[str[i]] === letterEncodeMap[str[i - 1]]) {
        continue;
      }
      result += letterEncodeMap[str[i]].toString();
    }
  }
  if (result.length <= 4) {
    for (let i = result.length; i < 4; i++) {
      result += "0";
    }
  }
  return result;
}
console.log(soundex("mike"));
console.log(soundex("obama"));
console.log(soundex("jordan"));
console.log(soundex("bpbbbb"));
