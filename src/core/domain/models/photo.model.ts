import { IImage } from "./image.model";
import { IUser } from "./user.model";

interface IPhotoBase {
  id: string;
  width: number;
  height: number;
  user: IUser;
  urls: IImage;
}

export interface IBePhoto extends IPhotoBase {
  created_at: string;
}

export interface IPhoto extends IPhotoBase {
  createdAt: Date;
}

export interface IPhotoDetailBase extends IPhotoBase {
  tags: {
    title: string;
  }[];
}

export interface IBePhotoDetail extends IPhotoDetailBase, IBePhoto {}
export interface IPhotoDetail extends IPhotoDetailBase, IPhoto {}

export interface IBeSearchImages {
  total: number;
  total_pages: number;
  results: IBePhoto[];
}

export interface ISearchImages {
  total: number;
  totalPages: number;
  results: IPhoto[];
}

export interface ISearchImagesFilter {
  tag: string;
  page: number;
  pageSize: number;
}
