import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectbadgeComponent } from './subjectbadge.component';

describe('SubjectbadgeComponent', () => {
  let component: SubjectbadgeComponent;
  let fixture: ComponentFixture<SubjectbadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectbadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectbadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
