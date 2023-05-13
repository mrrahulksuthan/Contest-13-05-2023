/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.filter(student => student.marks > 50)
  .map(student => console.log(student));
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student => {
  if (student.marks > 50) {
    console.log(student);
  }
});
}

function addData() {
  //Write your code here, just console.log
const newStudent = {id: 4, name: "susan", age: "20", marks: 45};
arr.push(newStudent);
console.log(newStudent);
}

function removeFailedStudent() {
  //Write your code here, just console.log
arr = arr.filter(student => student.marks >= 50);
console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
  {id: 5, name: "emma", age: "21", marks: 75},
  {id: 6, name: "peter", age: "19", marks: 65},
  {id: 7, name: "lisa", age: "22", marks: 90}
];
const concatenatedArray = arr.concat(newArray);
console.log(concatenatedArray);
}

PrintStudentswithMap();
PrintStudentsbyForEach();
addData();
removeFailedStudent();
concatenateArray();
