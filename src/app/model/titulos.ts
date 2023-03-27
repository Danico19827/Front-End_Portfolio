export class Titulos {

    id?:number;
    nombre: string;
    descripcion: string;
    tieneUrl: boolean;
    url: string;

    constructor(nombre:string, descripcion: string, url: string, tieneUrl:boolean){
        this.nombre = nombre
        this.descripcion = descripcion
        this.url = url
        this.tieneUrl = tieneUrl
    }

}
