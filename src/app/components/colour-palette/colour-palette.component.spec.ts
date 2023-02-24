import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourPaletteComponent } from './colour-palette.component';

describe('ColourPaletteComponent', () => {
  let component: ColourPaletteComponent;
  let fixture: ComponentFixture<ColourPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourPaletteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColourPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
