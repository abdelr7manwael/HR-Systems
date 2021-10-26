import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMngComponent } from './add-mng.component';

describe('AddMngComponent', () => {
  let component: AddMngComponent;
  let fixture: ComponentFixture<AddMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
