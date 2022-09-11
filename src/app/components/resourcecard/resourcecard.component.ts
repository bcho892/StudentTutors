import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resourcecard',
  templateUrl: './resourcecard.component.html',
  styleUrls: ['./resourcecard.component.css']
})
export class ResourcecardComponent implements OnInit {

  @Input() title!:string;
  @Input() image!:string;
  @Input() description!:string;
  @Input() link!:string;

  ngOnInit(): void {
  }

}
