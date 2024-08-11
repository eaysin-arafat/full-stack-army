const numbers = [2, 5, 6, 5, 47, 7, 8, 5, 4, 5];

// numbers.forEach(function (value, _, arr) {
//   console.log(value, arr);
// });

const arr = [1, 5, 3, 8, null, false, 5, "", "test", 9];

let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length - 1; j++) {
    if (!arr[j] || typeof arr[j] !== "number") {
      arr[j] = arr[j + 1];
      arr[j + 1] = undefined;
    }
  }

  if (arr[i] === undefined) {
    count++;
  }
}
arr.length -= count;

// console.log(arr);

const microphone = {
  brand: "Fifine",
  indicator: true,
  price: 5000,
  color: "black",
  startRecording() {
    console.log("recording");
  },
  stopRecording() {
    console.log("stoprecording");
  },
};

// Object.freeze(microphone);
microphone.rating = "5/10";

for (let k in microphone) {
  console.log(k, microphone[k]);
}

console.log(microphone);

const empty = {};

console.log(Object.keys(empty).length === 0);
