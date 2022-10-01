import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/service/pages.service';
import { Contactpage } from 'src/app/types/schemas';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  content!: Contactpage;
  constructor(private pageService: PagesService) {
    this.content = this.pageService.getContactpage();
  }
  format(text: string): string {
    return this.pageService.format(text);
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
