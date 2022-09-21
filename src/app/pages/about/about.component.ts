import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/service/pages.service';
import { Aboutpage, Goal } from 'src/app/types/schemas';

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
    console.log(this.content);
  }

  ngOnInit(): void {
  }

}
