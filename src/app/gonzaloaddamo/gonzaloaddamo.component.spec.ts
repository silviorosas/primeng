import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GonzaloaddamoComponent } from './gonzaloaddamo.component';

describe('GonzaloaddamoComponent', () => {
  let component: GonzaloaddamoComponent;
  let fixture: ComponentFixture<GonzaloaddamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GonzaloaddamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GonzaloaddamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
