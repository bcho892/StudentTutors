import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjectbadge',
  templateUrl: './subjectbadge.component.html',
  styleUrls: ['./subjectbadge.component.css']
})
export class SubjectbadgeComponent implements OnInit {

  @Input() subject!: string;
  @Input() color!: string;
  ngOnInit(): void {
  }

}
