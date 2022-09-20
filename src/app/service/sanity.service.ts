import { Injectable } from '@angular/core';
import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
import { environment } from 'src/environments/environment';
import { Homepage } from '../types/schemas';
import { Tutor } from '../types/util';
@Injectable({
  providedIn: 'root'
})
export class SanityService {

  constructor() { }

  sanityClientCredidentials = {
    option: SanityClient({
      projectId: environment.project_id,
      dataset: "production"
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

  async getHomepage(): Promise<Homepage[]> {
    return await this.sanityClientCredidentials.option.fetch(
      `*[_type == "pages"]`
    );
  }

}
