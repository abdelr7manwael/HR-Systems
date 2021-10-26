import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngListComponent } from './mng-list.component';

describe('MngListComponent', () => {
  let component: MngListComponent;
  let fixture: ComponentFixture<MngListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
