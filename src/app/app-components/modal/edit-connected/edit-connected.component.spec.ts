import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConnectedComponent } from './edit-connected.component';

describe('EditConnectedComponent', () => {
  let component: EditConnectedComponent;
  let fixture: ComponentFixture<EditConnectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConnectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
