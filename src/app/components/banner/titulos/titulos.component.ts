import { Component } from '@angular/core';
import { Titulos } from 'src/app/model/titulos';
import { TitulosService } from 'src/app/services/titulos.service';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent {
  titulo:Titulos[] = []

  constructor(private sTitulo:TitulosService){}

  ngOnInit(): void {
    this.cargarhabilidad();
    console.log(this.titulo)
  }

  cargarhabilidad(){
    this.sTitulo.lista().subscribe(data => {this.titulo = data})
  }

}
