import { Student } from 'src/app/models/student';
export class ReportCard {
    private name: string;
    private surname: string;
    matters: Map<string, number>;
     period: Date;

    constructor
        (
            name: string, surname: string, period: Date
        ) {
        this.name = name
        this.surname = surname;
        this.matters = new Map();
        this.period=period
    }

    loadMatter(matter: string, grade: number) {
        this.matters.set(matter, grade);
    }

    get nameStudent() {
        return this.name;
    }
    get surnameStudent() {
        return this.surname;
    }

    get load() {
        for (let value of this.matters.values()) {
            if (value != 0) {
                return true;
            }
        }
        return false;
    }

    cleanMatters() {
        this.matters = new Map()
    }

}
