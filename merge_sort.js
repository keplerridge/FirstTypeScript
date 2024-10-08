"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// I import the Student object from the other module
var object_1 = require("../Sprint1/object");
// This is a tool function used in the merge sort algorithm to combine two lists
function merge(left, right) {
    var sortedArray = [];
    var i = 0;
    var j = 0;
    while (i < left.length && j < right.length) {
        if (left[i].lessThanEqual(right[j])) {
            sortedArray.push(left[i]);
            i++;
        }
        else {
            sortedArray.push(right[j]);
            j++;
        }
    }
    // This combines and returns the sorted lists
    return __spreadArray(__spreadArray(__spreadArray([], sortedArray, true), left.slice(i), true), right.slice(j), true);
}
// This utilizes the merge sort algorithm and the above function to sort the students
function mergeSort(students) {
    // Here is some error handling
    if (!Array.isArray(students)) {
        throw new Error("Input must be an array of Student objects.");
    }
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        if (!(student instanceof object_1.Student)) {
            throw new Error("All elements in the array must be instances of the Student class.");
        }
    }
    if (students.length <= 1) {
        return students;
    }
    var mid = Math.floor(students.length / 2);
    var left = mergeSort(students.slice(0, mid));
    var right = mergeSort(students.slice(mid));
    // Return sorted list when recursion ends
    return merge(left, right);
}
// Create a list of student objects to test the merge sort on
var students = [
    new object_1.Student("Alice", "Sophomore", 3.5),
    new object_1.Student("Bob", "Junior", 3.8),
    new object_1.Student("Charlie", "Freshman", 2.9),
    new object_1.Student("Diana", "Senior", 3.6),
    new object_1.Student("Ethan", "Senior", 3.1),
    new object_1.Student("Fiona", "Junior", 3.9),
    new object_1.Student("George", "Freshman", 3.2),
    new object_1.Student("Hannah", "Sophomore", 3.7),
    new object_1.Student("Ian", "Junior", 2.5),
    new object_1.Student("Jessica", "Freshman", 3.0),
    new object_1.Student("Kyle", "Sophomore", 3.3),
    new object_1.Student("Laura", "Senior", 3.8),
    new object_1.Student("Michael", "Junior", 3.4),
    new object_1.Student("Nina", "Freshman", 3.6),
    new object_1.Student("Oliver", "Sophomore", 2.8),
    new object_1.Student("Paula", "Senior", 3.5),
    new object_1.Student("Quincy", "Junior", 3.1),
    new object_1.Student("Rita", "Freshman", 2.7),
    new object_1.Student("Sam", "Sophomore", 3.4),
    new object_1.Student("Tina", "Senior", 3.9),
    new object_1.Student("Ulysses", "Junior", 3.2),
    new object_1.Student("Vera", "Freshman", 3.7),
    new object_1.Student("William", "Sophomore", 3.0),
    new object_1.Student("Xena", "Senior", 3.6),
    new object_1.Student("Yasmine", "Junior", 2.5),
    new object_1.Student("Zack", "Freshman", 3.1),
    new object_1.Student("Abby", "Sophomore", 3.5),
    new object_1.Student("Ben", "Junior", 3.8),
    new object_1.Student("Cathy", "Freshman", 2.9),
    new object_1.Student("David", "Senior", 3.6),
    new object_1.Student("Eva", "Senior", 3.1),
    new object_1.Student("Frank", "Junior", 3.9),
    new object_1.Student("Grace", "Freshman", 3.2),
    new object_1.Student("Henry", "Sophomore", 3.7),
    new object_1.Student("Isabella", "Junior", 2.5),
    new object_1.Student("Jack", "Freshman", 3.0),
    new object_1.Student("Kathy", "Sophomore", 3.3),
    new object_1.Student("Leo", "Senior", 3.8),
    new object_1.Student("Molly", "Junior", 3.4),
    new object_1.Student("Nick", "Freshman", 3.6),
    new object_1.Student("Olivia", "Sophomore", 2.8),
    new object_1.Student("Peter", "Senior", 3.5),
    new object_1.Student("Quinn", "Junior", 3.1),
    new object_1.Student("Rose", "Freshman", 2.7),
    new object_1.Student("Steve", "Sophomore", 3.4),
    new object_1.Student("Tina", "Senior", 3.9),
    new object_1.Student("Ursula", "Junior", 3.2),
    new object_1.Student("Victor", "Freshman", 3.7),
    new object_1.Student("Wendy", "Sophomore", 3.0),
    new object_1.Student("Xander", "Senior", 3.6),
    new object_1.Student("Yara", "Junior", 2.5),
    new object_1.Student("Zoe", "Freshman", 3.1)
];
// This creates a list of sortedStudents using the merge sort algorithm
var sortedStudents = mergeSort(students);
// This prints out the sorted list in ascending order
console.log("Students sorted by GPA (ascending):");
sortedStudents.forEach(function (student) {
    console.log("".concat(student.name, ": ").concat(student.gpa));
});
