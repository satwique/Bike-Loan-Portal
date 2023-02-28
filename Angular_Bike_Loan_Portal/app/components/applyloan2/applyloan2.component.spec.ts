import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Applyloan2Component } from './applyloan2.component';

describe('Applyloan2Component', () => {
  let component: Applyloan2Component;
  let fixture: ComponentFixture<Applyloan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Applyloan2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Applyloan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
