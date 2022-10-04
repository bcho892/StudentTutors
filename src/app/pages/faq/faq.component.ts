import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/service/pages.service';
import { Question } from 'src/app/types/schemas';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs!: Question[];
  constructor(private pageService: PagesService) {
    this.faqs = this.pageService.getQuestions();
  }
  format(text: string): string {
    return this.pageService.format(text);
  }
  ngOnInit(): void {
  }

}
