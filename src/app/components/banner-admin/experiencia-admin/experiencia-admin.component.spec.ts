import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaAdminComponent } from './experiencia-admin.component';

describe('ExperienciaAdminComponent', () => {
  let component: ExperienciaAdminComponent;
  let fixture: ComponentFixture<ExperienciaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
