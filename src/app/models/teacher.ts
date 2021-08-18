export class Teacher {
    name: string;
    surname: string;
    idNumber:string;
    idType:string;
    bornDate: Date;
    adress: string;
    telephone: string;
    email: string;
    courses: string[];

    constructor
    (
            name: string,
            surname: string,
            bornDate: Date,
            idNumber:string,
            idType:string,
            adress: string,
            telephone: string,
            email: string,
            courses:string[]

    )
    {
        this.name=name;
        this.surname=surname;
        this.bornDate=bornDate;
        this.idNumber=idNumber;
        this.idType=idType;
        this.adress=adress;
        this.telephone=telephone;
        this.email=email;
        this.courses=courses
    }

    addCourse(course:string)
    {
        this.courses.push(course)
    }
    addCourseList(courses:string[])
    {
        this.courses=courses
    }
    
}
