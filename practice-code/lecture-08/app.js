const fn = new Function(
  "str",
  `let obj = {};

for (let s of str) {
  if (s !== " ") {
    obj[s] = s;
  }
}

return obj;`
);

console.log(fn("Eaysin"));

const fData = {
  params: ["a", "b"],
  body: ["const r = a+b", "return r"],
};

const fBody = fData.body.reduce((acc, cur) => {
  acc += cur + "; ";

  return acc;
}, "");

const tf = new Function(...fData.params, fBody);
console.log(tf(100, 2000));

const grrtFn = new Function(
  "name",
  "email",
  `
const fName = name.split(" ")[0];
console.log("Hello,", fName, "Is that your email?", email)
`
);

grrtFn("Eaysin Arafat", "eaysin@gmail.com");

// function box(n) {}
// box(5);

const operations = [
  {
    args: [10, 20],
    parems: ["a", "b"],
    body: ["console.log(a+b)"],
  },
  {
    args: [50, 100],
    parems: ["a", "b"],
    body: ["console.log(a-b)"],
  },
  {
    args: [50, 100],
    parems: ["a", "b"],
    body: ["console.log(a*b)"],
  },
  {
    args: [5],
    parems: ["n"],
    body: `for (let i = 0; i < n; i++) {
      let line = "";
      for (let j = 0; j < n; j++) {
        line += "@ ";
      }
      console.log(line);
    }`,
  },
];

operations.forEach((operation) => {
  const fn = new Function(...operation.parems, operation.body);

  fn(...operation.args);
});
