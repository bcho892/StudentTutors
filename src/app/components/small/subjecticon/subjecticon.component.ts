import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjecticon',
  templateUrl: './subjecticon.component.html',
  styleUrls: ['./subjecticon.component.css']
})
export class SubjecticonComponent implements OnInit {

  @Input() name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
