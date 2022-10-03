import { Component, OnInit, ViewChild } from '@angular/core';
import { StepperOrientation } from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { cities, courses } from 'src/app/types/util';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

  @ViewChild('stepper') stepper: any;
  cities: string[] = cities;
  courses = courses;
  submitting: boolean = false;
  submitted: boolean = false;
  invalid: boolean = false;
  currentChips: string[] = [];
  days: string[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  stepperOrientation: Observable<StepperOrientation>;
  bookForm: FormGroup;
  subjectControl = new FormControl('');
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
      subjects: new FormArray([], [
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
      street: new FormControl(''),
      suburb: new FormControl(''),
      city: new FormControl(''),
      postCode: new FormControl('', [
        Validators.maxLength(5),
        Validators.minLength(4),
        Validators.pattern('^[0-9]*$')
      ]),
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
  selected(event: MatAutocompleteSelectedEvent) {
    const toAdd = event.option.value;
    const subjects = (this.bookForm.controls['subjects'] as FormArray);
    const index = subjects.controls.findIndex(item => item.value === toAdd);
    if (index !== -1) return;
    subjects.push(new FormControl(event.option.value));
  }
  remove(toRemove: string) {
    const subjects = (this.bookForm.controls['subjects'] as FormArray);
    const index = subjects.controls.findIndex(item => item.value === toRemove);
    subjects.removeAt(index);
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


  async submit(): Promise<void> {
    if (!this.bookForm.valid) {
      this.invalid = true;
      return;
    }
    this.submitting = true;
    let currentDate = new Date();
    this.bookForm.value.availability = this.bookForm.value.availability.toString();
    this.bookForm.value.subjects = this.bookForm.value.subjects.toString();
    this.bookForm.value.submittedDate = currentDate.toString();
    const data = JSON.stringify(this.bookForm.value);
    try {
      const response = await fetch(`https://api.apispreadsheets.com/data/${environment.form_key_booking}`,
        {
          method: 'POST',
          body: data,
        }
      )
      if (response.status === 201) {
        console.log("Submitted");
        this.bookForm.reset();
        this.stepper.reset();
        this.invalid = false;
        this.submitting = false;
        this.submitted = true;
      } else {
        console.log("rejected");
        this.invalid = true;
        this.submitting = false;
        return;
      }
    } catch {
      this.invalid = true;
      this.submitting = false;
      console.error("Something went wrong");
      return;
    }
  }
  ngOnInit(): void {
  }

}
