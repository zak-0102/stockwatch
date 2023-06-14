import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedComponent } from './timed.component';

describe('TimedComponent', () => {
  let component: TimedComponent;
  let fixture: ComponentFixture<TimedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
