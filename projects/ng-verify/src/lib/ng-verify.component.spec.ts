import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgVerifyComponent } from './ng-verify.component';

describe('NgVerifyComponent', () => {
  let component: NgVerifyComponent;
  let fixture: ComponentFixture<NgVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
