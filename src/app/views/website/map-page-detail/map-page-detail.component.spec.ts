import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPageDetailComponent } from './map-page-detail.component';

describe('MapPageDetailComponent', () => {
  let component: MapPageDetailComponent;
  let fixture: ComponentFixture<MapPageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapPageDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
