export class Usuario {

    id?:number;
    descripcion: string;
    edad: number;
    nombre: string;
    url: string;

    constructor(descripcion:string, edad:number, nombre:string, url:string){
        this.descripcion = descripcion;
        this.edad = edad;
        this.nombre = nombre;
        this.url = url
    }

}
