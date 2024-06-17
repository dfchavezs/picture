import {
  IBePhoto,
  IBePhotoDetail,
  IBeSearchImages,
  ISearchImagesFilter,
} from "../../domain/models/photo.model";
import { faker } from "@faker-js/faker";
import { PhotoRepository } from "../../domain/repositories/photo.repository";
import { Mock } from "../api/Mock";

interface IPhotoSize {
  width: number;
  height: number;
}

const PHOTO_SIZES: IPhotoSize[] = [
  {
    width: 640,
    height: 480,
  },
  {
    width: 480,
    height: 640,
  },
];

/**
 * Return a photo generated by faker
 * @param id the id of the photo, if needed
 * @param tag 1 tag to add to the photo, if needed
 * @returns a photo's object
 */
export function generatePhoto(id?: string, tag?: string): IBePhotoDetail {
  const size = PHOTO_SIZES[faker.number.int({ min: 0, max: 1 })];
  const url = faker.image.urlLoremFlickr({ category: "animals", ...size });
  const extraTags = tag ? [{ title: tag }] : [];
  return {
    id: id ?? faker.string.uuid(),
    ...size,
    created_at: faker.date.past({ years: 2 }).toISOString(),
    user: {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
    },
    urls: {
      raw: url,
      full: url,
      regular: url,
      small: url,
      thumb: url,
    },
    tags: [
      ...extraTags,
      { title: faker.location.city() },
      { title: faker.location.city() },
    ],
  };
}

/**
 * Implements PhotoRepository with mock data
 */
export class PhotoMockService extends Mock implements PhotoRepository {
  public getPhoto = async (id: string): Promise<IBePhotoDetail> => {
    return await this._executor(() => generatePhoto(id));
  };

  public randomPhotos = async (): Promise<IBePhoto[]> => {
    return await this._executor(() => Array.from({ length: 30 }, () => generatePhoto()));
  };

  public searchPhoto = async ({
    tag,
    page,
    pageSize,
  }: ISearchImagesFilter): Promise<IBeSearchImages> => {
    const total = this.nRows;
    const totalPages = Math.ceil(total / pageSize);
    return await this._executor(() => ({
      total,
      total_pages: totalPages,
      results: Array.from(
        {
          length: Math.max(0, Math.min(total - pageSize * (page - 1), pageSize)),
        },
        () => generatePhoto(undefined, tag),
      ),
    }));
  };
}
