module.exports = function check(str, bracketsConfig) {
  /*
  let str1 = str.split("");
  let res1 = str1.filter((item) => item == "[");
  let res2 = str1.filter((item) => item == "]");
  let res3 = str1.filter((item) => item == "(");
  let res4 = str1.filter((item) => item == ")");
  let res5 = str1.filter((item) => item == "{");
  let res6 = str1.filter((item) => item == "}");
  if (
    res1.length == res2.length &&
    res3.length == res4.length &&
    res5.length == res6.length
  ) {
    return true;
  } else {
    return false;
  }
};*/

  let brackets = bracketsConfig.map((item) => item.join(""));

  while (true) {
    let first = str.length;

    for (let bracket of brackets) {
      str = str.replace(bracket, "");
    }

    if (str.length === first) {
      break; // No further reductions can be made
    }
  }

  return str.length === 0;
};
