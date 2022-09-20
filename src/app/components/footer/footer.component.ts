import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
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
  constructor(private facebookService: FacebookService) {

  }

  ngOnInit(): void {
    this.initFacebookService();
  }
  private initFacebookService(): void {
    const initParams: InitParams = { xfbml: true, version: 'v15.0' };
    this.facebookService.init(initParams);
  }

}
