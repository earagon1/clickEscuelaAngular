export class Parent
{
     public id: string;
     public name: string;
     public surname: string;
     bornDate: Date;
     idNumber: number;
     adress: string;
     telephone: string;
     email: string;
     idType: string;



     constructor(id: string,
                 name: string,
                 surname: string,
                 bornDate: Date,
                 idNumber: number,
                 adress: string,
                 telephone: string,
                 email: string) {
          this.id = id;
          this.name = name;
          this.surname = surname;
          this.bornDate = bornDate;
          this.idNumber = idNumber;
          this.adress = adress;
          this.telephone = telephone;
          this.email = email;
     }


    toString(): string {
        return this.name;
   }
}
