export class Asistance {
    name: string;
    surname: string;
    date: Date;
    status: boolean;
    constructor(
        name: string,
        surname: string,
        date: Date,
        status: boolean
    ) {
        this.name = name;
        this.surname = surname;
        this.date = date;
        this.status = status;
    }
}


