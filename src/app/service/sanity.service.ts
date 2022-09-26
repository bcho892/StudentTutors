import { Injectable } from '@angular/core';
import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
import { environment } from 'src/environments/environment';
import { DisplaySubject, Goal, Pages, Resource } from '../types/schemas';
import { Tutor } from '../types/util';
@Injectable({
  providedIn: 'root'
})
export class SanityService {

  constructor() { }

  sanityClientCredidentials = {
    option: SanityClient({
      projectId: environment.project_id,
      dataset: "production",
      apiVersion: "2022-09-21",
      useCdn: true,
    })
  };
  urlFor = (source: any) =>
    ImageUrlBuilder(this.sanityClientCredidentials.option).image(source)

  async getTutors(): Promise<Tutor[]> {
    return await this.sanityClientCredidentials.option.fetch(
      `*[_type == "tutor"]{
        _id,
        name,
        "image": image.asset -> url,
        description,
        subjects
      }`
    );
  }

  async getPages(): Promise<Pages[]> {
    return await this.sanityClientCredidentials.option.fetch(
      `*[_type == "pages"]`
    );
  }

  async getResources(): Promise<Resource[]> {
    return await this.sanityClientCredidentials.option.fetch(
      `*[_type == "resource"]`
    )
  }
  async getSubjects(): Promise<DisplaySubject[]> {
    return await this.sanityClientCredidentials.option.fetch(
      `*[_type == "displaysubject"]`
    )
  }
  async getGoals(): Promise<Goal[]> {
    return await this.sanityClientCredidentials.option.fetch(
      `*[_type == "goal"]`
    )
  }

}
