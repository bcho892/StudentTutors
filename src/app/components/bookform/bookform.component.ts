import { Component, OnInit } from '@angular/core';
import { StepperOrientation } from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
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
      lastName: new FormControl('', [
        Validators.required
      ]),
      middleName: new FormControl(''),
      dob: new FormControl('', [
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      mobile: new FormControl('', [
        Validators.minLength(9),
        Validators.maxLength(11),
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]
      ),
      address: new FormControl(''),
      parentFirstName: new FormControl(''),
      parentLastName: new FormControl(''),
      parentMiddleName: new FormControl(''),
      parentRelationship: new FormControl(''),
      parentEmail: new FormControl('', [
        Validators.email
      ]),
      parentMobile: new FormControl('',
        [
          Validators.minLength(9),
          Validators.maxLength(11)
        ]),
      message: new FormControl('', [
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
  async submit(): Promise<Boolean> {
    if (!this.bookForm.valid) return false;
    this.bookForm.value.availability = this.bookForm.value.availability.toString();
    console.log(this.bookForm.value);
    const data = JSON.stringify(this.bookForm.value);
    try {
      const response = await fetch(`https://api.apispreadsheets.com/data/${environment.form_key}`,
        {
          method: 'POST',
          body: data,
        }
      )
      if (response.status === 201) {
        console.log("Submitted");
        return true;
      } else {
        console.log("rejected");
        return false
      }
    } catch {
      return false;
    }
  }
  ngOnInit(): void {
  }

}
