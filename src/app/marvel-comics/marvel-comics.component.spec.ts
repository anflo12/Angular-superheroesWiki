import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelComicsComponent } from './marvel-comics.component';

describe('MarvelComicsComponent', () => {
  let component: MarvelComicsComponent;
  let fixture: ComponentFixture<MarvelComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
