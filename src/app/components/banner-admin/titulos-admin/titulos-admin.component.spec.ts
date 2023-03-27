import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosAdminComponent } from './titulos-admin.component';

describe('TitulosAdminComponent', () => {
  let component: TitulosAdminComponent;
  let fixture: ComponentFixture<TitulosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitulosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
