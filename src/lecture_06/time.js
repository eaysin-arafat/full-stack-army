const arr = [];

const arrToObj = {};

for (i = 0; i < 5000000; i++) {
  const o = {
    id: i,
    value: i,
  };
  arr.push(o);

  arrToObj[i] = o;
}

console.time("find");
let id = 4999999;
const obj = arr.find((item) => item.id === id);
obj.value = 555;
console.timeEnd("find");

console.time("obj");
arrToObj[id].value = 999;
console.timeEnd("obj");
