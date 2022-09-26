import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { PagesService } from './service/pages.service';
import { NavigationEnd, Router } from '@angular/router';
import { Homepage } from './types/schemas';
import { environment } from 'src/environments/environment';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaded: boolean = false;
  title = 'StudentTutors';
  homepage!: Homepage[];
  constructor(private facebookService: FacebookService, private pageService: PagesService, public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.measurement_id, { 'page_path': event.urlAfterRedirects });
      }
    })
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
