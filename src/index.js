module.exports = function check(str, bracketsConfig) {
  let str1 = str.split("");
  for (let i = 0; i < str1.length; i++) {
    if (
      str1[i] != "[" &&
      str1[i] != "{" &&
      str1[i] != "}" &&
      str1[i] != "]" &&
      str1[i] != ")" &&
      str1[i] != "(" &&
      str1[i] != "|"
    ) {
      return true;
    }
  }
};
