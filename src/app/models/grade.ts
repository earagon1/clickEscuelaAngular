import { Student } from './student';

export class Grade {
    student: string;
    code: string;
    description: string;
    matter: string;
    grade: number;
    course: string;
    
    constructor(
        student: string,
        code: string,
        description: string,
        matter: string,
        grade: number
    ) {
        this.student = student;
        this.code = code;
        this.description = description;
        this.matter = matter;
        this.grade = grade;
    }
}
