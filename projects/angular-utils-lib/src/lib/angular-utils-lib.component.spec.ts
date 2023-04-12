import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularUtilsLibComponent } from './angular-utils-lib.component';

describe('AngularUtilsLibComponent', () => {
  let component: AngularUtilsLibComponent;
  let fixture: ComponentFixture<AngularUtilsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularUtilsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularUtilsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
