import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneSetComponent } from './pane-set.component';

describe('PaneSetComponent', () => {
  let component: PaneSetComponent;
  let fixture: ComponentFixture<PaneSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaneSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
