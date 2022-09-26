import { Component, OnInit } from '@angular/core';
import { Tutor } from 'src/app/types/util';
import { PagesService } from 'src/app/service/pages.service';
import { Tutorpage } from 'src/app/types/schemas';
@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {

  tutors: Tutor[] = [];
  content!: Tutorpage;
  constructor(private pageService: PagesService) {
    this.tutors = this.pageService.getTutors();
    this.content = this.pageService.getTutorpage();
  }


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }



}
