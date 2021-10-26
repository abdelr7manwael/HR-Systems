import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMngComponent } from './update-mng.component';

describe('UpdateMngComponent', () => {
  let component: UpdateMngComponent;
  let fixture: ComponentFixture<UpdateMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
