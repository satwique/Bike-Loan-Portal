import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanstatuspageComponent } from './loanstatuspage.component';

describe('LoanstatuspageComponent', () => {
  let component: LoanstatuspageComponent;
  let fixture: ComponentFixture<LoanstatuspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanstatuspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanstatuspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
