import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesscardComponent } from './processcard.component';

describe('ProcesscardComponent', () => {
  let component: ProcesscardComponent;
  let fixture: ComponentFixture<ProcesscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
