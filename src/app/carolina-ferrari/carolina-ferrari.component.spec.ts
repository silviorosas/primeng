import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarolinaFerrariComponent } from './carolina-ferrari.component';

describe('CarolinaFerrariComponent', () => {
  let component: CarolinaFerrariComponent;
  let fixture: ComponentFixture<CarolinaFerrariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarolinaFerrariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarolinaFerrariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
