import { Component, OnInit } from '@angular/core';
import { Tutor } from 'src/app/types/util';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {

  tutors: Tutor[] = [
    { name: "Yaniel Yang", image: "test", description: "test", subjects: [{ name: "maths", color: "var(--black)" }] },
    { name: "Yan Yuo", image: "test", description: "test", subjects: [{ name: "english", color: "var(--bluedark)" }, { name: "maths", color: "var(--black)" }] },
    { name: "Test", image: "test", description: "test", subjects: [{ name: "maths", color: "var(--black)" }] }
  ]

  ngOnInit(): void {
  }

}
