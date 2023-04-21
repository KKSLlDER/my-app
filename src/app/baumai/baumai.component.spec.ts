import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaumaiComponent } from './baumai.component';

describe('BaumaiComponent', () => {
  let component: BaumaiComponent;
  let fixture: ComponentFixture<BaumaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaumaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaumaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
