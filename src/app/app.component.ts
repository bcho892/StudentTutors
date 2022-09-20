import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { SanityService } from './service/sanity.service';
import { Homepage } from './types/schemas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentTutors';
  homepage!: Homepage[];
  constructor(private sanityService: SanityService, private facebookService: FacebookService) {
    this.initFacebookService();
    this.getHomepage();
  }
  private initFacebookService(): void {
    const initParams: InitParams = { xfbml: true, version: 'v15.0' };
    this.facebookService.init(initParams);
  }

  async getHomepage(): Promise<Homepage[]> {
    this.homepage = await this.sanityService.getHomepage();
    return this.homepage;
  }

}
