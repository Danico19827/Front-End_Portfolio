import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoProyectosComponent } from './cuerpo-proyectos.component';

describe('CuerpoProyectosComponent', () => {
  let component: CuerpoProyectosComponent;
  let fixture: ComponentFixture<CuerpoProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
