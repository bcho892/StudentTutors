import { Component, Input, OnInit } from '@angular/core';
import { ProcessStep } from 'src/app/types/util';
@Component({
  selector: 'app-processcard',
  templateUrl: './processcard.component.html',
  styleUrls: ['./processcard.component.css']
})
export class ProcesscardComponent implements OnInit {
  @Input() process!: ProcessStep;

    constructor() {
  }

  ngOnInit(): void {
  }

}
