import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaProyectosAdminComponent } from './ventana-proyectos-admin.component';

describe('VentanaProyectosAdminComponent', () => {
  let component: VentanaProyectosAdminComponent;
  let fixture: ComponentFixture<VentanaProyectosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaProyectosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaProyectosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
