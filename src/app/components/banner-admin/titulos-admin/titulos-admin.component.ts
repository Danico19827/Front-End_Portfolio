import { Component , OnInit} from '@angular/core';
import { Titulos } from 'src/app/model/titulos';
import { TitulosService } from 'src/app/services/titulos.service';

@Component({
  selector: 'app-titulos-admin',
  templateUrl: './titulos-admin.component.html',
  styleUrls: ['./titulos-admin.component.css']
})
export class TitulosAdminComponent implements OnInit {

  titulo:Titulos[] = []
  idEnviar:any
  
  constructor(private sTitulo:TitulosService) { }
  
  ngOnInit(): void {
    this.cargarTitulo();
    console.log(this.titulo)
  }

  cargarTitulo(){
    this.sTitulo.lista().subscribe(data => {this.titulo = data})
  }

  eliminarTitulo(id:any){
    alert("Titulo Eliminado")
    window.location.reload()
    return this.sTitulo.delete(id).subscribe(data => {}) 
  }

  cargarId(id:any){
    this.idEnviar = id
  }

  dameElDato(){
    return this.idEnviar
  }
}