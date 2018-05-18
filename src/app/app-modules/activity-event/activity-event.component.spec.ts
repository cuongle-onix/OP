import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityEventComponent } from './activity-event.component';

describe('ActivityEventComponent', () => {
  let component: ActivityEventComponent;
  let fixture: ComponentFixture<ActivityEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
