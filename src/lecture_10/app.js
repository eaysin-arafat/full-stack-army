const isResolved = true;

const promise = new Promise((resolve, reject) => {
  if (isResolved) {
    resolve("complated");
  } else {
    reject("data");
  }
});

promise
  .catch((e) => {
    console.log("Rejected");
    console.log(e);
  })
  .then((r) => {
    console.log(r);
  });

console.log(promise);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(2000).then(() => {
  console.log("Done in 2000ms");
});

wait(20).then(() => {
  console.log("Done in 20ms");
});
