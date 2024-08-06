import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchLeadListComponent } from './fetch-lead-list.component';

describe('FetchLeadListComponent', () => {
  let component: FetchLeadListComponent;
  let fixture: ComponentFixture<FetchLeadListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchLeadListComponent]
    });
    fixture = TestBed.createComponent(FetchLeadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
