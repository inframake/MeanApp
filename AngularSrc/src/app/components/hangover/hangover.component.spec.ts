import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangoverComponent } from './hangover.component';

describe('HangoverComponent', () => {
  let component: HangoverComponent;
  let fixture: ComponentFixture<HangoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
