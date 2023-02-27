import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsGraphsComponent } from './charts-graphs.component';

describe('ChartsGraphsComponent', () => {
  let component: ChartsGraphsComponent;
  let fixture: ComponentFixture<ChartsGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
