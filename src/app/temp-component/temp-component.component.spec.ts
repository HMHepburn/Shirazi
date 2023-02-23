import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempComponentComponent } from './temp-component.component';

describe('TempComponentComponent', () => {
  let component: TempComponentComponent;
  let fixture: ComponentFixture<TempComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
