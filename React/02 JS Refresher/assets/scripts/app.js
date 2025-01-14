// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import * as util from "./util.js";
// import { abc as content } from "./util.js";

// console.log(apiKey);
// console.log(abc);
// console.log(util.apiKey);
// console.log(content);

// console.log("Hello wolrd!");

// function greet() {
//   console.log("Hello!");
// }

// greet();

// const hobbies = ["a", "b", "c"];
// hobbies.push("d");

// const index = hobbies.findIndex((item) => item === "c");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// const [firstName, lastName] = ["Sangu", "Lee"];
// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Max",
//   age: 34,
// };

// console.log(userName);
// console.log(age);

const hobbies = ["Sports", "Cooking"];
const user = {
  name: "Max",
  age: 34,
};

const newHobbies = ["Reading"];
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const extendedUser = {
  isAdmin: true,
  ...user,
};
console.log(extendedUser);

for (const hobby of hobbies) {
  console.log(hobby);
}
