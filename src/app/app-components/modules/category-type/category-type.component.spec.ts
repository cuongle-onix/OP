import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTypeComponent } from './category-type.component';

describe('CategoryTypeComponent', () => {
  let component: CategoryTypeComponent;
  let fixture: ComponentFixture<CategoryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
