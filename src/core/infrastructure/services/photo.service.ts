import { ROWS_PER_PAGE } from "../../../config";
import {
  IBePhoto,
  IBePhotoDetail,
  IBeSearchImages,
  ISearchImagesFilter,
} from "../../domain/models/photo.model";
import { PhotoRepository } from "../../domain/repositories/photo.repository";
import { Api } from "../api/Api";

/**
 * Implements PhotoRepository with API requests
 */
export class PhotoApiService extends Api implements PhotoRepository {
  public getPhoto = async (id: string): Promise<IBePhotoDetail> => {
    return await this.get<IBePhotoDetail>(`/photos/${id}`);
  };

  public randomPhotos = async (): Promise<IBePhoto[]> => {
    return await this.get<IBePhoto[]>(`/photos/random`, {
      params: { count: ROWS_PER_PAGE },
    });
  };

  public searchPhoto = async ({
    tag,
    page,
    pageSize,
  }: ISearchImagesFilter): Promise<IBeSearchImages> => {
    return await this.get<IBeSearchImages>(`/search/photos`, {
      params: { query: tag, page, per_page: pageSize },
    });
  };
}
