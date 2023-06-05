import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeHistoryComponent } from './badge-history.component';

describe('BadgeHistoryComponent', () => {
  let component: BadgeHistoryComponent;
  let fixture: ComponentFixture<BadgeHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeHistoryComponent]
    });
    fixture = TestBed.createComponent(BadgeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
