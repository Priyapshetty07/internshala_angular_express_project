import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireInternsOfYourCompanyComponent } from './hire-interns-of-your-company.component';

describe('HireInternsOfYourCompanyComponent', () => {
  let component: HireInternsOfYourCompanyComponent;
  let fixture: ComponentFixture<HireInternsOfYourCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireInternsOfYourCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireInternsOfYourCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
