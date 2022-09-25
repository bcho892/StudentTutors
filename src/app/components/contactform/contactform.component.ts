import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  submitted: boolean = false;

  contactForm = this.formBuilder.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.maxLength(35),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(250),
    ])
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }

  newSubmission(): void {
    this.submitted = false;
  }

  async onSubmit(): Promise<void> {
    if (!this.contactForm.valid) return;
    const data = new FormData()
    data.append("name", this.contactForm.value.name!)
    data.append("email", this.contactForm.value.email!)
    data.append("message", this.contactForm.value.message!)
    try {
      const submitResponse = await fetch('https://formspree.io/f/mqkjqbyw',
        {
          method: 'POST',
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        }
      )
      if (submitResponse.ok) {
        this.contactForm.reset();
        this.submitted = true;
      } else {
        this.submitted = false;
        console.warn("Something went wrong");
      }
    } catch {
      this.submitted = false;
      console.warn("An error was caught in the operation");
    }
  }


  ngOnInit(): void {
  }

}
