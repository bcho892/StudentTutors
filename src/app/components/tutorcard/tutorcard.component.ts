import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'src/app/types/util';

@Component({
  selector: 'app-tutorcard',
  templateUrl: './tutorcard.component.html',
  styleUrls: ['./tutorcard.component.css']
})
export class TutorcardComponent implements OnInit {
  @Input() name!:string;
  @Input() image!:string;
  @Input() description!:string;
  @Input() subjects!: Subject[];
  ngOnInit(): void {
  }

}
