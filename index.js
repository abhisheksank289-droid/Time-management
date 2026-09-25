// Student Grade Calculator

const student = {
  name: "Abhishek",
  marks: [85, 78, 92, 88, 76]
};

const total = student.marks.reduce((sum, mark) => sum + mark, 0);
const average = total / student.marks.length;

let grade;

if (average >= 90) {
  grade = "A+";
} else if (average >= 80) {
  grade = "A";
} else if (average >= 70) {
  grade = "B";
} else if (average >= 60) {
  grade = "C";
} else {
  grade = "F";
}

console.log("Student Name:", student.name);
console.log("Marks:", student.marks.join(", "));
console.log("Total:", total);
console.log("Average:", average.toFixed(2));
console.log("Grade:", grade);