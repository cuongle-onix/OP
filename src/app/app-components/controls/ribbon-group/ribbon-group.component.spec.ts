import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonGroupComponent } from './ribbon-group.component';

describe('RibbonGroupComponent', () => {
  let component: RibbonGroupComponent;
  let fixture: ComponentFixture<RibbonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
