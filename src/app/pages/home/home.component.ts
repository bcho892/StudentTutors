import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/service/pages.service';
import { Homepage } from 'src/app/types/schemas';
import { ProcessStep } from '../../types/util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content!: Homepage;
  process: ProcessStep[] = [
    { step: 1, name: "Choose a Subject", description: "" },
    { step: 2, name: "Find a Tutor", description: "" },
    { step: 3, name: "Make a Booking", description: "" }]

  constructor(private pageService: PagesService) {
    this.content = this.pageService.getHomepage();
    console.log(this.content);
  }
  public getUrl(source: any) {
    return this.pageService.buildImageUrl(source);
  }

  ngOnInit(): void {

  }

}
