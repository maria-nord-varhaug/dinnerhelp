import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsearchComponent } from './ingredientsearch.component';

describe('IngredientsearchComponent', () => {
  let component: IngredientsearchComponent;
  let fixture: ComponentFixture<IngredientsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
