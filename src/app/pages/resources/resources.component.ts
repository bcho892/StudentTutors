import { Component, OnInit } from '@angular/core';
import { ResourceItem } from 'src/app/types/util';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources: ResourceItem[] = [
    { title: "NCEA Resources", image: "", description: "Since our programs mostly focus on the NCEA curriculum, we have compiled some past papers", link: "" },
    { title: "Student tutors sign up", image: "", description: "A pdf copy of the sign up form so we can get started with a program", link: "" }
  ]

  ngOnInit(): void {
  }

}
