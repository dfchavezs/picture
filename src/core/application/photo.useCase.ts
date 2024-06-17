import {
  IPhoto,
  IPhotoDetail,
  ISearchImages,
  ISearchImagesFilter,
} from "../domain/models/photo.model";
import { PhotoRepository } from "../domain/repositories/photo.repository";

/**
 * Obtain information from repo,
 * and adapt that.
 */
export class PhotoUseCase {
  private repo: PhotoRepository;

  constructor(repo: PhotoRepository) {
    this.repo = repo;
  }

  /**
   * Obtain details of a Photo including tags
   * @param id The ID of the photo
   * @returns a Photo's object
   */
  public getPhoto = async (id: string): Promise<IPhotoDetail> => {
    const photo = await this.repo.getPhoto(id);
    return {
      ...photo,
      createdAt: new Date(photo.created_at),
    };
  };

  /**
   * List random photos
   * @returns a list of Photo's objects
   */
  public randomPhotos = async (): Promise<IPhoto[]> => {
    const photos = await this.repo.randomPhotos();
    // adapt information
    return photos.map(photo => ({
      ...photo,
      createdAt: new Date(photo.created_at),
    }));
  };

  /**
   * List photos with a pagination
   * @param tag the tag name to filter
   * @param page the current page
   * @param pageSize the number of objects per page
   * @returns a list of photos
   */
  public searchPhoto = async (params: ISearchImagesFilter): Promise<ISearchImages> => {
    const searchPhotos = await this.repo.searchPhoto(params);
    // adapt information
    return {
      total: searchPhotos.total,
      totalPages: searchPhotos.total_pages,
      // adapt information
      results: searchPhotos.results.map(photo => ({
        ...photo,
        createdAt: new Date(photo.created_at),
      })),
    };
  };
}
