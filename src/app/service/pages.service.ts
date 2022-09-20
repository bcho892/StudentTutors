import { Injectable } from '@angular/core';
import { Aboutpage, Homepage, Pages } from '../types/schemas';
import { SanityService } from './sanity.service';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private loaded: boolean = false;
  private pages?: Pages[];
  private homepage?: Homepage;
  private aboutpage?: Aboutpage;
  constructor(private sanityService: SanityService) {
    this.getPages();
  }
  async getPages(): Promise<boolean> {
    this.pages = await this.sanityService.getPages();
    this.homepage = this.pages[0].homepage;
    this.aboutpage = this.pages[0].aboutpage;
    this.loaded = true;
    return true;
  }

  public getStatus() {
    return this.loaded;
  }

  public getHomepage() {
    return this.homepage;
  }

}
