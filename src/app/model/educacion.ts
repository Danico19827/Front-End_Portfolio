export class Educacion {

    id?:number;
    tipoEducacion: string;
    descripcion: string;
    tieneLogo: boolean;
    logo: string;

    constructor(tipoEducacion: string, descripcion: string, tieneLogo: boolean, logo: string,){
        this.tipoEducacion = tipoEducacion
        this.descripcion = descripcion
        this.tieneLogo = tieneLogo
        this.logo = logo
        
    }

}
