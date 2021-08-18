import { StudentI } from './student';

export interface CourseI {
    id: string;
    year: number;
    division: string;
    countStudent: number;
    students: StudentI[];
}
