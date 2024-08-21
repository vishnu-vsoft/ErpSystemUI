import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTopSideComponent } from './nav-top-side.component';

describe('NavTopSideComponent', () => {
  let component: NavTopSideComponent;
  let fixture: ComponentFixture<NavTopSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavTopSideComponent]
    });
    fixture = TestBed.createComponent(NavTopSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
