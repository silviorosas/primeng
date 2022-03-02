import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VamorillaComponent } from './vamorilla.component';

describe('VamorillaComponent', () => {
  let component: VamorillaComponent;
  let fixture: ComponentFixture<VamorillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VamorillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VamorillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
