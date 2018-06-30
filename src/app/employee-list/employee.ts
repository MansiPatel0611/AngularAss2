export interface Employee{
    firstname:string;
    lastname:string;
    email:string;
    address:string;
    username:string;
    password:string;
    gender:string;
    qualification:string;
    experience:string;
    langKnown:Array<string>;
}
export class Emp implements Employee{
    constructor()
        {
        }
        public firstname:string;
        public lastname:string;
        public email:string;
        public address:string;
        public username:string;
        public password:string;
        public gender:string;
        public qualification:string;
        public experience:string;
        public langKnown=new Array<any>();

       
}