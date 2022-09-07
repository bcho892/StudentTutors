import { Component, OnInit } from '@angular/core';
import { LinkItem } from 'src/app/types/util';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  links: LinkItem[] = [{ name: "Home", link: "" },
  { name: "About", link: "/About" }, {
    name: "Contact", link: "/Contact"
  }, { name: "Book", link: "/Book" }]
  constructor() { }

  ngOnInit(): void {
  }

}
