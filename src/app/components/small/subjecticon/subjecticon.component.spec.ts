import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjecticonComponent } from './subjecticon.component';

describe('SubjecticonComponent', () => {
  let component: SubjecticonComponent;
  let fixture: ComponentFixture<SubjecticonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjecticonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjecticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
