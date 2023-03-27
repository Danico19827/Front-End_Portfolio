import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiInformacionAdminComponent } from './mi-informacion-admin.component';

describe('MiInformacionAdminComponent', () => {
  let component: MiInformacionAdminComponent;
  let fixture: ComponentFixture<MiInformacionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiInformacionAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiInformacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
