const contactNumName = [
  "Ayman",
  "Eaysin",
  "Akash",
  "Mahin",
  "Segufa",
  "Mishu",
  "RIpan",
  "Masud",
  "Robi",
  "TOmal",
  "Noor",
];

const nameGrouped = contactNumName.reduce((acc, cur) => {
  const firstLetter = cur[0].toUpperCase();

  if (firstLetter in acc) {
    acc[firstLetter].push(cur);
  } else {
    acc[firstLetter] = [cur];
  }

  return acc;
}, {});

console.log(nameGrouped);
