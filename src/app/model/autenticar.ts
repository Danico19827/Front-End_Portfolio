export class Autenticacion {

    id?:number;
    user: string;
    password: string;
    coincide: boolean;

    constructor(user:string, password:string, coincide: boolean){
        this.user = user;
        this.password = password;
        this.coincide = coincide
    }

}
