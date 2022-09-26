import { Injectable } from '@angular/core';
import { Aboutpage, Contactpage, DisplaySubject, Goal, Homepage, Pages, Resource } from '../types/schemas';
import { Tutor } from '../types/util';
import { SanityService } from './sanity.service';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private loaded: boolean = false;
  private pages?: Pages[];
  private homepage!: Homepage;
  private aboutpage!: Aboutpage;
  private contactpage!: Contactpage;
  private tutors!: Tutor[];
  private goals!: Goal[];
  private resources!: Resource[];
  private subjects!: DisplaySubject[];

  constructor(private sanityService: SanityService) {
    this.getPages();
  }
  async getPages(): Promise<boolean> {
    this.pages = await this.sanityService.getPages();
    this.tutors = await this.sanityService.getTutors();
    this.goals = await this.sanityService.getGoals();
    this.subjects = await this.sanityService.getSubjects();
    this.resources = await this.sanityService.getResources();
    this.homepage = this.pages[0].homepage;
    this.aboutpage = this.pages[0].aboutpage;
    this.contactpage = this.pages[0].contactpage;
    this.loaded = this.pages ? true : false;
    return this.loaded;
  }

  public buildImageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  public getStatus(): boolean {
    return this.loaded;
  }

  public getHomepage(): Homepage {
    return this.homepage;
  }

  public getAboutpage(): Aboutpage {
    return this.aboutpage;
  }

  public getContactpage(): Contactpage {
    return this.contactpage;
  }

  public getTutors(): Tutor[] {
    return this.tutors;
  }

  public getGoals(): Goal[] {
    return this.goals;
  }

  public getResources(): Resource[] {
    return this.resources;
  }

  public getSubjects(): DisplaySubject[] {
    return this.subjects;
  }
}
