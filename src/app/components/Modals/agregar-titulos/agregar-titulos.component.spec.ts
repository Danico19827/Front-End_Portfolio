import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTitulosComponent } from './agregar-titulos.component';

describe('AgregarTitulosComponent', () => {
  let component: AgregarTitulosComponent;
  let fixture: ComponentFixture<AgregarTitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTitulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
