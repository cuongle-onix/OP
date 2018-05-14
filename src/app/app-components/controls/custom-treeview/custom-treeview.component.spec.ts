import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTreeviewComponent } from './custom-treeview.component';

describe('CustomTreeviewComponent', () => {
  let component: CustomTreeviewComponent;
  let fixture: ComponentFixture<CustomTreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTreeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
