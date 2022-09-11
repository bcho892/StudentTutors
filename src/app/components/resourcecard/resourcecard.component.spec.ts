import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcecardComponent } from './resourcecard.component';

describe('ResourcecardComponent', () => {
  let component: ResourcecardComponent;
  let fixture: ComponentFixture<ResourcecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
