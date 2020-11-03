import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerstwoComponent } from './serverstwo.component';

describe('ServerstwoComponent', () => {
  let component: ServerstwoComponent;
  let fixture: ComponentFixture<ServerstwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerstwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
