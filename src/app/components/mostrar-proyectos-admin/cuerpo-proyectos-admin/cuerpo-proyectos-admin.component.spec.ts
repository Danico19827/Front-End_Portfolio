import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoProyectosAdminComponent } from './cuerpo-proyectos-admin.component';

describe('CuerpoProyectosAdminComponent', () => {
  let component: CuerpoProyectosAdminComponent;
  let fixture: ComponentFixture<CuerpoProyectosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoProyectosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoProyectosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
