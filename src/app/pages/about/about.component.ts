import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/service/pages.service';
import { Aboutpage, Goal, Image } from 'src/app/types/schemas';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  content!: Aboutpage;
  goals!: Goal[];

  constructor(private pageService: PagesService) {
    this.content = this.pageService.getAboutpage();
    this.goals = this.pageService.getGoals();
  }
  public getUrl(source: Image) {
    return source && source.asset ? this.pageService.buildImageUrl(source.asset._ref) : "./assets/photo.png";
  }

  format(text: string): string {
    return this.pageService.format(text);
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
