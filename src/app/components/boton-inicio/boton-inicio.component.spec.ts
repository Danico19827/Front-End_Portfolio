import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonInicioComponent } from './boton-inicio.component';

describe('BotonInicioComponent', () => {
  let component: BotonInicioComponent;
  let fixture: ComponentFixture<BotonInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
