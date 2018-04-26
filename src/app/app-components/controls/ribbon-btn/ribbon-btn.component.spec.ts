import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonBtnComponent } from './ribbon-btn.component';

describe('RibbonBtnComponent', () => {
  let component: RibbonBtnComponent;
  let fixture: ComponentFixture<RibbonBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
