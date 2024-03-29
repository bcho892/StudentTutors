import { Component, Input, OnInit } from '@angular/core';
import { PagesService } from 'src/app/service/pages.service';
import { SanityService } from 'src/app/service/sanity.service';
import { Subject } from 'src/app/types/util';

@Component({
  selector: 'app-tutorcard',
  templateUrl: './tutorcard.component.html',
  styleUrls: ['./tutorcard.component.css']
})
export class TutorcardComponent implements OnInit {
  constructor(private sanityService: SanityService, private pageService: PagesService) {
  }

  @Input() name!: string;
  @Input() image!: string;
  @Input() description!: string;
  @Input() subjects!: Subject[];

  ngOnInit(): void {
  }

  formatDescription(text: string) {
    return this.pageService.format(text);
  }

  imageUrl(source: any) {
    return source ? this.sanityService.urlFor(source) : "";
  }
}
