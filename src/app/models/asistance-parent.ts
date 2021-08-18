export class AsistanceParent {
    name: string;
    surname: string;
    status: boolean;
    date: Date;
    certificate: string;

    constructor
        (
            name: string,

            status: boolean,
            date: Date,
            certificate: string
        ) {
        this.name = name;
        this.status = status;
        this.date = date;
        this.certificate = certificate
    }
}
