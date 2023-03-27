import { Component } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  edu:Educacion[] = []

  constructor(private sEducacion:EducacionService){}

  ngOnInit(): void {
    this.cargarEducacion();
    console.log(this.edu)
  }

  cargarEducacion(){
    this.sEducacion.lista().subscribe(data => {this.edu = data})
  }

}
