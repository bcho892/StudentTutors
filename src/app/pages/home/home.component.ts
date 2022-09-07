import { Component, OnInit } from '@angular/core';
import { ProcessStep } from '../../types/util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  process: ProcessStep[] = [
    { step: 1, name: "Choose a Subject", description: "" },
    { step: 2, name: "Find a Tutor", description: "" },
    { step: 3, name: "Make a Booking", description: "" }]
  constructor() { }

  ngOnInit(): void {
  }

}
