import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmansnetComponent } from './gmansnet.component';

describe('GmansnetComponent', () => {
  let component: GmansnetComponent;
  let fixture: ComponentFixture<GmansnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmansnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmansnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
