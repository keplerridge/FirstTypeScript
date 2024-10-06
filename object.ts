export class Student {
    name: string;
    year: string;
    gpa: number;

    constructor(name: string, year: string, gpa: number) {
        this.name = name;
        this.year = year;
        this.gpa = gpa;
    }

    isEqual(other: Student): boolean {
        return this.gpa === other.gpa;
    }

    greaterThan(other: Student): boolean {
        return this.gpa > other.gpa;
    }

    lessThan(other: Student): boolean {
        return this.gpa < other.gpa;
    }

    greaterThanEqual(other: Student): boolean {
        return this.gpa >= other.gpa;
    }

    lessThanEqual(other: Student): boolean {
        return this.gpa <= other.gpa;
    }
}