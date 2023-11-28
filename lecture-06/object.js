/**
 * 1. Easily Travers (0(n))
 * 2. Filter
 * 3. Delete O(1)
 * 4. Update O(1)
 * 5. Create a new one O(1)
 */

const studentsObject = {
  "2d1658eb-ddee-4ab1-0888-db38e071fc5a7": {
    id: "2d1658eb-ddee-4ab1-0888-db38e071fc5a7",
    name: "Tanjil Akash",
    email: "tanjil@gmail.com",
  },
  "6b772d5a-aa5b-438d-0c84-12388248a5dd5": {
    id: "6b772d5a-aa5b-438d-0c84-12388248a5dd5",
    name: "Miah Masud",
    email: "masud@gmail.com",
  },
  "12db0d2a-fe8e-4e64-065b-f5c3cb57197f1": {
    id: "12db0d2a-fe8e-4e64-065b-f5c3cb57197f1",
    name: "Ripan Miah",
    email: "ripan@gmail.com",
  },
};
// console.log(studentsObject);

// ! create
const student = {
  id: "d6f4165a-addf-4256-0e80-db77399e944f1",
  name: "Eaysin Arafat",
  email: "eaysin@gamil.com",
};

studentsObject[student.id] = student;

// !update
const idToUpdate = "2d1658eb-ddee-4ab1-0888-db38e071fc5a7";
const updatedData = {
  name: "Oliullah",
  email: "oli@gmail.com",
};

studentsObject[idToUpdate] = {
  ...studentsObject[idToUpdate],
  ...updatedData,
};

// !delete
delete studentsObject[idToUpdate];
console.log(studentsObject);

// !travers
// for (v in studentsObject) {
//   console.log(studentsObject[v].email);
// }

Object.values(studentsObject).forEach((student) => {
  console.log(student.name, student.email);
});

const studentArray = Object.values(studentsObject);
studentArray[0].name = "Changed";
console.log(studentArray);
console.log(studentsObject);
