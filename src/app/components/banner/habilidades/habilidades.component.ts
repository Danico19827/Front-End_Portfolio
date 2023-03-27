import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  habilidad:Habilidades[] = []

  constructor(private sHabilidades:HabilidadesService){}

  ngOnInit(): void {
    this.cargarhabilidad();
    console.log(this.habilidad)
  }

  cargarhabilidad(){
    this.sHabilidades.lista().subscribe(data => {this.habilidad = data})
  }
}
