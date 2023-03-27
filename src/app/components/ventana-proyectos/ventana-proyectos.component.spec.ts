import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaProyectosComponent } from './ventana-proyectos.component';

describe('VentanaProyectosComponent', () => {
  let component: VentanaProyectosComponent;
  let fixture: ComponentFixture<VentanaProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
