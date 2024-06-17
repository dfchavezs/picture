import {
  IBePhoto,
  IBePhotoDetail,
  IBeSearchImages,
  ISearchImagesFilter,
} from "../models/photo.model";

/**
 * models of request to implement.
 * see core/infrastructure/services
 */
export interface PhotoRepository {
  randomPhotos: () => Promise<IBePhoto[]>;
  getPhoto: (id: string) => Promise<IBePhotoDetail>;
  searchPhoto: (params: ISearchImagesFilter) => Promise<IBeSearchImages>;
}
