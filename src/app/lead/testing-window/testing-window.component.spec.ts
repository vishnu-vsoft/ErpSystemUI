import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingWindowComponent } from './testing-window.component';

describe('TestingWindowComponent', () => {
  let component: TestingWindowComponent;
  let fixture: ComponentFixture<TestingWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingWindowComponent]
    });
    fixture = TestBed.createComponent(TestingWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
