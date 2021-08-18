import { Adress } from './adress';
import { ParentI } from './parent';
export interface StudentI {

    name: string;
    surname: string;
    document: string;
    birthday: string;
    gender: string;
    level: string;
    schoolId: string;
    division: string;
    grade: string;
    cellPhone: string;
    email: string;
    school: string;
    adress: Adress;
    parent: ParentI;
}
