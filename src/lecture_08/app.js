new Function();

function strToObj(str) {
  let obj = {};

  for (let s of str) {
    if (s !== " ") {
      obj[s] = s;
    }
  }

  return obj;
}

console.log(strToObj("Eaysin"));
