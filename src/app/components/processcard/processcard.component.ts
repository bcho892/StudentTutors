import { Component, Input, OnInit } from '@angular/core';
import { PagesService } from 'src/app/service/pages.service';
import { Image } from 'src/app/types/schemas';

@Component({
  selector: 'app-processcard',
  templateUrl: './processcard.component.html',
  styleUrls: ['./processcard.component.css']
})
export class ProcesscardComponent implements OnInit {
  @Input() step!: number;
  @Input() image!: string;
  @Input() name!: string;
  @Input() description!: string;

  constructor(private pageService: PagesService) {
  }
  public getUrl(source: Image) {
    return source ? this.pageService.buildImageUrl(source.asset._ref) : "./assets/photo.png";
  }
  ngOnInit(): void {
  }

}
