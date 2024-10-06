"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, year, gpa) {
        this.name = name;
        this.year = year;
        this.gpa = gpa;
    }
    Student.prototype.isEqual = function (other) {
        return this.gpa === other.gpa;
    };
    Student.prototype.greaterThan = function (other) {
        return this.gpa > other.gpa;
    };
    Student.prototype.lessThan = function (other) {
        return this.gpa < other.gpa;
    };
    Student.prototype.greaterThanEqual = function (other) {
        return this.gpa >= other.gpa;
    };
    Student.prototype.lessThanEqual = function (other) {
        return this.gpa <= other.gpa;
    };
    return Student;
}());
exports.Student = Student;
