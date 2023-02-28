import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyloancompletedComponent } from './applyloancompleted.component';

describe('ApplyloancompletedComponent', () => {
  let component: ApplyloancompletedComponent;
  let fixture: ComponentFixture<ApplyloancompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyloancompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyloancompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
