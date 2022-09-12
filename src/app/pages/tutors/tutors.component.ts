import { Component, OnInit } from '@angular/core';
import { Tutor } from 'src/app/types/util';
import { SanityService } from 'src/app/service/sanity.service';
@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {

  constructor(private sanityService: SanityService) { }

  tutors: Tutor[] = [];

  ngOnInit(): void {
    this.getTutors();
  }

  async getTutors(): Promise<Tutor[]> {
    this.tutors = await this.sanityService.getTutors();
    return this.tutors;
  }

}
