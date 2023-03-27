import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesAdminComponent } from './habilidades-admin.component';

describe('HabilidadesAdminComponent', () => {
  let component: HabilidadesAdminComponent;
  let fixture: ComponentFixture<HabilidadesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
