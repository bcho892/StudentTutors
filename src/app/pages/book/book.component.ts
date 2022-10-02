import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/service/pages.service';
import { Bookpage } from 'src/app/types/schemas';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  content!: Bookpage;
  constructor(private pageService: PagesService) {
    this.content = this.pageService.getBookpage();
  }
  format(text: string): string {
    return this.pageService.format(text);
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
