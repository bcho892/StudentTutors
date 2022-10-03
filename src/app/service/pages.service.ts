import { Injectable } from '@angular/core';
import { Aboutpage, Bookpage, Contactpage, DisplaySubject, Goal, Homepage, Pages, Resource, Resourcepage, Tutorpage } from '../types/schemas';
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
  private tutorpage!: Tutorpage;
  private resourcepage!: Resourcepage;
  private bookpage!: Bookpage;
  private booksubjects!: string[];
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
    let pages = this.pages[0];
    this.homepage = pages.homepage;
    this.aboutpage = pages.aboutpage;
    this.contactpage = pages.contactpage;
    this.tutorpage = pages.tutorpage;
    this.resourcepage = pages.resourcepage;
    this.bookpage = pages.bookpage;
    this.loaded = this.pages ? true : false;
    return this.loaded;
  }

  public format(text: string) {
    return text.replace(/<newline>/g, '\n');
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

  public getTutorpage(): Tutorpage {
    return this.tutorpage;
  }

  public getResourcepage(): Resourcepage {
    return this.resourcepage;
  }
  public getBookpage(): Bookpage {
    return this.bookpage;
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
