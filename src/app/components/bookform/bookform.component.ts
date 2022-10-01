import { Component, OnInit } from '@angular/core';
import { StepperOrientation } from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {
  days: string[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  stepperOrientation: Observable<StepperOrientation>;
  bookForm: FormGroup;
  constructor(private breakpointObserver: BreakpointObserver, private formBuilder: FormBuilder) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 850px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

    this.bookForm = this.formBuilder.group({
      schoolName: new FormControl('',
        Validators.required),
      yearLevel: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(13)
      ]),
      subjects: new FormControl('', [
        Validators.required
      ]),
      availability: new FormArray([],
        Validators.required),
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl(''),
      middleName: new FormControl(''),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      mobile: new FormControl('', [
        Validators.minLength(9),
        Validators.maxLength(11)
      ]
      ),
      address: new FormControl(''),
      parentFirstName: new FormControl(''),
      parentLastName: new FormControl(''),
      parentMiddleName: new FormControl(''),
      parentEmail: new FormControl(''),
      parentMobile: new FormControl('',
        [
          Validators.minLength(9),
          Validators.maxLength(11)
        ]),
      agreed: new FormControl(false, [
        Validators.requiredTrue
      ])
    })
  }

  onAvaliabilityChange(event: any) {
    const selectedTimes = (this.bookForm.controls['availability'] as FormArray);
    const timeSlot = event.source.value;
    if (event.checked) {
      selectedTimes.push(new FormControl(timeSlot));
    } else {
      const index = selectedTimes.controls.findIndex(item => item.value === timeSlot);
      selectedTimes.removeAt(index);
    }
  }

  formatDate(abbreviation: string): string {
    switch (abbreviation) {
      case "Mo":
        return "Monday";
      case "Tu":
        return "Tuesday";
      case "We":
        return "Wednesday";
      case "Th":
        return "Thursday";
      case "Fr":
        return "Friday";
      case "Sa":
        return "Saturday";
      case "Su":
        return "Sunday";
      default:
        return "Error";
    }
  }

  ngOnInit(): void {
  }

}
