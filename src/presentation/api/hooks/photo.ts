import { useQuery } from "@tanstack/react-query";
import { photoClient } from "../../../core";
import { EQueryPhoto } from "../query.key";
import { ISearchImagesFilter } from "../../../core/domain/models/photo.model";

// DEFINE QUERY PARAMETERS

export const useRandomPhotos = () => {
  return useQuery({
    queryFn: photoClient.randomPhotos,
    queryKey: [EQueryPhoto.RANDOM_PHOTOS],
    refetchInterval: 5 * 60 * 1000,
  });
};

export const useSearchPhoto = (params: ISearchImagesFilter) => {
  return useQuery({
    queryFn: () => photoClient.searchPhoto(params),
    queryKey: [EQueryPhoto.SEARCH_PHOTO, params.tag, params.page, params.pageSize],
  });
};

export const useGetPhotos = (ids: string[]) => {
  return useQuery({
    queryFn: async () => {
      return await Promise.all(ids.map(id => photoClient.getPhoto(id)));
    },
    queryKey: [EQueryPhoto.GET_PHOTO, ids],
    enabled: ids.length > 0,
  });
};
