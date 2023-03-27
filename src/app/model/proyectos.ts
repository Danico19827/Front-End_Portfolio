export class Proyectos {

    id?:number;
    nombre: string;
    descripcion: string;
    razon: string;
    url: string;

    constructor(nombre:string, descripcion: string, razon: string, url: string){
        this.nombre = nombre
        this.descripcion = descripcion
        this.razon = razon
        this.url = url
    }

}
