import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgustinaNavarrete17Component } from './agustina-navarrete17.component';

describe('AgustinaNavarrete17Component', () => {
  let component: AgustinaNavarrete17Component;
  let fixture: ComponentFixture<AgustinaNavarrete17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgustinaNavarrete17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgustinaNavarrete17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
