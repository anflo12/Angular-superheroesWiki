import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcComicsComponent } from './dc-comics.component';

describe('DcComicsComponent', () => {
  let component: DcComicsComponent;
  let fixture: ComponentFixture<DcComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
