import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsBadgesTagsComponent } from './pills-badges-tags.component';

describe('PillsBadgesTagsComponent', () => {
  let component: PillsBadgesTagsComponent;
  let fixture: ComponentFixture<PillsBadgesTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillsBadgesTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PillsBadgesTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
