import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarianarsComponent } from './marianars.component';

describe('MarianarsComponent', () => {
  let component: MarianarsComponent;
  let fixture: ComponentFixture<MarianarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarianarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarianarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
