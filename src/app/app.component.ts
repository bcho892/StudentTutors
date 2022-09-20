import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { PagesService } from './service/pages.service';
import { SanityService } from './service/sanity.service';
import { Homepage } from './types/schemas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaded: boolean = false;
  title = 'StudentTutors';
  homepage!: Homepage[];
  constructor(private pageService: PagesService, private facebookService: FacebookService) {
    this.initFacebookService();
    this.loadPages();
  }
  private initFacebookService(): void {
    const initParams: InitParams = { xfbml: true, version: 'v15.0' };
    this.facebookService.init(initParams);
  }

  private async loadPages(): Promise<number> {
    this.loaded = await this.pageService.getPages();
    return 1;
  }

}
