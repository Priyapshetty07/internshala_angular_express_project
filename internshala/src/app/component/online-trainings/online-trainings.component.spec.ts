import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTrainingsComponent } from './online-trainings.component';

describe('OnlineTrainingsComponent', () => {
  let component: OnlineTrainingsComponent;
  let fixture: ComponentFixture<OnlineTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
