import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarHabilidadComponent } from './agregar-habilidad.component';

describe('AgregarHabilidadComponent', () => {
  let component: AgregarHabilidadComponent;
  let fixture: ComponentFixture<AgregarHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarHabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
