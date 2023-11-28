const channel = "Stack Learner";

const channelIterator = channel[Symbol.iterator]();

// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());

// for (let v of channel) {
//   console.log(v);
// }

while (true) {
  const data = channelIterator.next();

  if (data.done) {
    break;
  }

  //   console.log(data.value);
}

const range = {
  start: 0,
  stop: 100,
  step: 5,
};

range[Symbol.iterator] = function () {
  let current = this.start;
  const stop = this.stop;
  const step = this.step;

  return {
    next() {
      const o = {
        value: current,
        done: current > stop,
      };

      current += step;
      return o;
    },
  };
};

for (let v of range) {
  console.log(v);
}
