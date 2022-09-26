import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/service/pages.service';
import { DisplaySubject, Homepage, Image } from 'src/app/types/schemas';
import { ProcessStep } from '../../types/util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content!: Homepage;
  subjects!: DisplaySubject[];
  process: ProcessStep[] = [
    { step: 1, name: "Choose a Subject", description: "" },
    { step: 2, name: "Find a Tutor", description: "" },
    { step: 3, name: "Make a Booking", description: "" }]

  constructor(private pageService: PagesService) {
    this.content = this.pageService.getHomepage();
    this.subjects = this.pageService.getSubjects();
    console.log(this.subjects);
  }
  public getUrl(source: Image) {
    return source ? this.pageService.buildImageUrl(source.asset._ref) : "./assets/photo.png";
  }

  ngOnInit(): void {

  }

}
