const numbers = [1, 2, 3, 4, 5, false, "", NaN, 5, 6];

// *when I want truthy value !!
const filtered = numbers.filter((v) => !!v);
// console.log(filtered);

// !reduce
const array = [1, 2, 3, 4, 5, 6, 7];

const sum = array.reduce((a, b) => a + b);
console.log(sum);

// we want all array value in one string
const result = numbers.reduce((acc, curr, index) => {
  if (index === 0) acc += "[ ";
  if (curr) {
    acc += curr.toString() + (index < numbers.length - 1 ? ", " : "");
  }

  if (index === numbers.length - 1) acc += " ]";

  return acc;
}, "");

console.log(result);

const Arrayresult = numbers.reduce((acc, curr) => {
  if (curr) {
    acc.push(curr.toString());
  }

  return acc;
}, []);

// !reduce Implementation
const myReduce = (array, cb, initialValue) => {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = cb(acc, array[i], i, array);
  }

  return acc;
};

const rsum = myReduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0);

console.log(rsum);

const fm = myReduce(
  numbers,
  (acc, curr) => {
    if (curr) {
      acc.push(curr * curr);
    }

    return acc;
  },
  []
);

console.log(fm);
