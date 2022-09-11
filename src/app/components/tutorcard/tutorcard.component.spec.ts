import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorcardComponent } from './tutorcard.component';

describe('TutorcardComponent', () => {
  let component: TutorcardComponent;
  let fixture: ComponentFixture<TutorcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
