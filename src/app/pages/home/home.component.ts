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
    { step: 1, image: { asset: { _ref: "" } }, name: "Choose a Subject", description: "" },
    { step: 3, image: { asset: { _ref: "" } }, name: "Make a Booking", description: "" },
    { step: 2, image: { asset: { _ref: "" } }, name: "Find a Tutor", description: "" },
  ]

  constructor(private pageService: PagesService) {
    this.content = this.pageService.getHomepage();
    this.subjects = this.pageService.getSubjects();
    if (this.content.sectionthree) this.process = this.content.sectionthree.steps;
    this.process.sort((a, b) => a.step - b.step);
    //console.log(this.subjects);
  }
  public getUrl(source: Image) {
    return source ? this.pageService.buildImageUrl(source.asset._ref) : "./assets/photo.png";
  }
  format(text: string) {
    return this.pageService.format(text);
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
