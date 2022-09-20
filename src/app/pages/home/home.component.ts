import { Component, OnInit } from '@angular/core';
import { SanityService } from 'src/app/service/sanity.service';
import { Homepage } from 'src/app/types/schemas';
import { ProcessStep } from '../../types/util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  process: ProcessStep[] = [
    { step: 1, name: "Choose a Subject", description: "" },
    { step: 2, name: "Find a Tutor", description: "" },
    { step: 3, name: "Make a Booking", description: "" }]
  constructor(private sanityService: SanityService) {
  }
  homepage!: Homepage[];
  ngOnInit(): void {

    this.getHomepage()
  }
  async getHomepage(): Promise<Homepage[]> {
    this.homepage = await this.sanityService.getHomepage();
    console.log(this.homepage);
    return this.homepage;
  }

}
