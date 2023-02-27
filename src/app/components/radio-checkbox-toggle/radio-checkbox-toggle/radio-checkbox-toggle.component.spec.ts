import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioCheckboxToggleComponent } from './radio-checkbox-toggle.component';

describe('RadioCheckboxToggleComponent', () => {
  let component: RadioCheckboxToggleComponent;
  let fixture: ComponentFixture<RadioCheckboxToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioCheckboxToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioCheckboxToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
