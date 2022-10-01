import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrowbutton',
  templateUrl: './arrowbutton.component.html',
  styleUrls: ['./arrowbutton.component.css']
})
export class ArrowbuttonComponent implements OnInit {
  @Input() toPage!: string;
  @Input() text!: string;
  @Input() blue!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
