import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiasBertoloComponent } from './matias-bertolo.component';

describe('MatiasBertoloComponent', () => {
  let component: MatiasBertoloComponent;
  let fixture: ComponentFixture<MatiasBertoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiasBertoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiasBertoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
