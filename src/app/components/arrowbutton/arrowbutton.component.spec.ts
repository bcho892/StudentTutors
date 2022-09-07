import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowbuttonComponent } from './arrowbutton.component';

describe('ArrowbuttonComponent', () => {
  let component: ArrowbuttonComponent;
  let fixture: ComponentFixture<ArrowbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
