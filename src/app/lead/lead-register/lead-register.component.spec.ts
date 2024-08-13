import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadRegisterComponent } from './lead-register.component';

describe('LeadRegisterComponent', () => {
  let component: LeadRegisterComponent;
  let fixture: ComponentFixture<LeadRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadRegisterComponent]
    });
    fixture = TestBed.createComponent(LeadRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
