export class Homework {
   code: string;
   name: string;
   description: string;
   deliveryDate: Date;
   matter: string;
   course: string;


   constructor(
      code: string,
      name: string,
      description: string,
      deliveryDate: Date,
      course: string,
      matter: string) {

      this.code = code;
      this.name = name;
      this.description = description;
      this.deliveryDate = deliveryDate;
      this.course = course;
      this.matter = matter;

   }
}
