import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAdminComponent } from './boton-admin.component';

describe('BotonAdminComponent', () => {
  let component: BotonAdminComponent;
  let fixture: ComponentFixture<BotonAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
