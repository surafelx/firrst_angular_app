import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerthreeComponent } from './serverthree.component';

describe('ServerthreeComponent', () => {
  let component: ServerthreeComponent;
  let fixture: ComponentFixture<ServerthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
