import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePicsComponent } from './employeepics.component';

describe('EmployeePicsComponent', () => {
  let component: EmployeePicsComponent;
  let fixture: ComponentFixture<EmployeePicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
