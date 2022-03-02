import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilvioRosasComponent } from './silvio-rosas.component';

describe('SilvioRosasComponent', () => {
  let component: SilvioRosasComponent;
  let fixture: ComponentFixture<SilvioRosasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilvioRosasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilvioRosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
