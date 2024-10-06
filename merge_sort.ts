// I import the Student object from the other module
import { Student } from '../Sprint1/object';

// This is a tool function used in the merge sort algorithm to combine two lists
function merge(left: Student[], right: Student[]): Student[] {
    const sortedArray: Student[] = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i].lessThanEqual(right[j])) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    // This combines and returns the sorted lists
    return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}

// This utilizes the merge sort algorithm and the above function to sort the students
function mergeSort(students: Student[]): Student[] {
    // Here is some error handling
    if (!Array.isArray(students)) {
        throw new Error("Input must be an array of Student objects.");
    }

    for (const student of students) {
        if (!(student instanceof Student)) {
            throw new Error("All elements in the array must be instances of the Student class.");
        }
    }

    if (students.length <= 1) {
        return students;
    }

    const mid = Math.floor(students.length / 2);
    
    const left = mergeSort(students.slice(0, mid));
    
    const right = mergeSort(students.slice(mid));

    // Return sorted list when recursion ends
    return merge(left, right);
}

// Create a list of student objects to test the merge sort on
const students: Student[] = [
    new Student("Alice", "Sophomore", 3.5),
    new Student("Bob", "Junior", 3.8),
    new Student("Charlie", "Freshman", 2.9),
    new Student("Diana", "Senior", 3.6),
    new Student("Ethan", "Senior", 3.1),
    new Student("Fiona", "Junior", 3.9),
    new Student("George", "Freshman", 3.2),
    new Student("Hannah", "Sophomore", 3.7),
    new Student("Ian", "Junior", 2.5),
    new Student("Jessica", "Freshman", 3.0),
    new Student("Kyle", "Sophomore", 3.3),
    new Student("Laura", "Senior", 3.8),
    new Student("Michael", "Junior", 3.4),
    new Student("Nina", "Freshman", 3.6),
    new Student("Oliver", "Sophomore", 2.8),
    new Student("Paula", "Senior", 3.5),
    new Student("Quincy", "Junior", 3.1),
    new Student("Rita", "Freshman", 2.7),
    new Student("Sam", "Sophomore", 3.4),
    new Student("Tina", "Senior", 3.9),
    new Student("Ulysses", "Junior", 3.2),
    new Student("Vera", "Freshman", 3.7),
    new Student("William", "Sophomore", 3.0),
    new Student("Xena", "Senior", 3.6),
    new Student("Yasmine", "Junior", 2.5),
    new Student("Zack", "Freshman", 3.1),
    new Student("Abby", "Sophomore", 3.5),
    new Student("Ben", "Junior", 3.8),
    new Student("Cathy", "Freshman", 2.9),
    new Student("David", "Senior", 3.6),
    new Student("Eva", "Senior", 3.1),
    new Student("Frank", "Junior", 3.9),
    new Student("Grace", "Freshman", 3.2),
    new Student("Henry", "Sophomore", 3.7),
    new Student("Isabella", "Junior", 2.5),
    new Student("Jack", "Freshman", 3.0),
    new Student("Kathy", "Sophomore", 3.3),
    new Student("Leo", "Senior", 3.8),
    new Student("Molly", "Junior", 3.4),
    new Student("Nick", "Freshman", 3.6),
    new Student("Olivia", "Sophomore", 2.8),
    new Student("Peter", "Senior", 3.5),
    new Student("Quinn", "Junior", 3.1),
    new Student("Rose", "Freshman", 2.7),
    new Student("Steve", "Sophomore", 3.4),
    new Student("Tina", "Senior", 3.9),
    new Student("Ursula", "Junior", 3.2),
    new Student("Victor", "Freshman", 3.7),
    new Student("Wendy", "Sophomore", 3.0),
    new Student("Xander", "Senior", 3.6),
    new Student("Yara", "Junior", 2.5),
    new Student("Zoe", "Freshman", 3.1)
];

// This creates a list of sortedStudents using the merge sort algorithm
const sortedStudents = mergeSort(students);

// This prints out the sorted list in ascending order
console.log("Students sorted by GPA (ascending):");
sortedStudents.forEach(student => {
    console.log(`${student.name}: ${student.gpa}`);
});
