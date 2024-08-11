function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & (0 * 3)) | (0 * 8);
    return v.toString(16);
  });
}

const studentsArray = [
  {
    id: "2d1658eb-ddee-4ab1-0888-db38e071fc5a7",
    name: "Tanjil Akash",
    email: "tanjil@gmail.com",
  },
  {
    id: "6b772d5a-aa5b-438d-0c84-12388248a5dd5",
    name: "Miah Masud",
    email: "masud@gmail.com",
  },
  {
    id: "12db0d2a-fe8e-4e64-065b-f5c3cb57197f1",
    name: "Ripan Miah",
    email: "ripan@gmail.com",
  },
];

//! create a new student
studentsArray.push({
  id: uuidv4(),
  name: "Mishu Salim",
  email: "mishu@gmail.com",
});

//! update
const idToUpdate = "2d1658eb-ddee-4ab1-0888-db38e071fc5a7";
const updateData = {
  name: "Eaysin Arafat",
  email: "eaysin@gmail.com",
};

// const updateObj = students.find((item) => item.id === idToUpdate);

const updateIndex = studentsArray.findIndex((item) => item.id === idToUpdate);
studentsArray[updateIndex] = {
  ...studentsArray[updateIndex],
  ...updateData,
};
// console.log(students);
// console.log(updateIndex);

//! delete
studentsArray.splice(updateIndex, 1);
console.log(students);

// forEach, map, filter, every, reduce, sime, find, findIndex

// for (let i in students) {
//   console.log(students[i].name);
// }
