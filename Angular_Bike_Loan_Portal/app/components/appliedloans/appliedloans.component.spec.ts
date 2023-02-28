import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedloansComponent } from './appliedloans.component';

describe('AppliedloansComponent', () => {
  let component: AppliedloansComponent;
  let fixture: ComponentFixture<AppliedloansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedloansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
