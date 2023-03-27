import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionAdminComponent } from './introduccion-admin.component';

describe('IntroduccionAdminComponent', () => {
  let component: IntroduccionAdminComponent;
  let fixture: ComponentFixture<IntroduccionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduccionAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduccionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
