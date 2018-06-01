import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectTypeCategoryComponent } from './connect-type-category.component';

describe('ConnectComponent', () => {
  let component: ConnectTypeCategoryComponent;
  let fixture: ComponentFixture<ConnectTypeCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectTypeCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectTypeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
