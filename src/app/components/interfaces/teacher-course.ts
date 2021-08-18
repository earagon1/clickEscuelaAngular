import { Adress } from './adress';
import { CourseI } from './course';

export interface TeacherCourse {
        adress: Adress;
        birthday: string;
        cellPhone: string;
        document: string;
        documentType: string;
        email: string;
        gender: string;
        id: string;
        name: string;
        schoolId: number;
        surname: string;
        courses: CourseI[];
}
