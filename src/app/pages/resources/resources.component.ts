import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/service/pages.service';
import { Resource, Resourcepage } from 'src/app/types/schemas';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent implements OnInit {
  content!: Resourcepage;

  constructor(private pageService: PagesService) {
    this.content = this.pageService.getResourcepage();
    this.resources = this.resources.concat(this.pageService.getResources());
  }
  resources: Resource[] = [
    { name: "NCEA Resources", description: "Since our programs mostly focus on the NCEA curriculum, we have compiled some past papers", link: "" },
    { name: "Student tutors sign up", description: "A pdf copy of the sign up form so we can get started with a program", link: "" }
  ]

  ngOnInit(): void {
  }

}
