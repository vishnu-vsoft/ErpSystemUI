import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnlyLeadComponent } from './view-only-lead.component';

describe('ViewOnlyLeadComponent', () => {
  let component: ViewOnlyLeadComponent;
  let fixture: ComponentFixture<ViewOnlyLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewOnlyLeadComponent]
    });
    fixture = TestBed.createComponent(ViewOnlyLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
