import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstCommonUtilsComponent } from './ngst-common-utils.component';

describe('NgstCommonUtilsComponent', () => {
  let component: NgstCommonUtilsComponent;
  let fixture: ComponentFixture<NgstCommonUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstCommonUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstCommonUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
