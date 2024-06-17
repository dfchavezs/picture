import { Skeleton } from "primereact/skeleton";
import { useGetPhotos, useSearchPhoto } from "../../api/hooks/photo";
import Photo from "../../components/Photo/Photo";
import { GalleryContainer } from "../../components/Photo/Photo.styled";
import { TagSearchContainer, TagSearchTitle } from "./TagSearch.styled";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useEffect, useRef, useState } from "react";
import { ISearchImagesFilter } from "../../../core/domain/models/photo.model";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { ROWS_PER_PAGE } from "../../../config";
import NoData from "../../components/NoData/NoData";
import Maintenance from "../../components/Maintenance/Maintenance";

function TagSearch() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { tag } = useParams();
  const [filter, setFilter] = useState<ISearchImagesFilter>({
    page: 1,
    pageSize: ROWS_PER_PAGE,
    tag: tag ?? "",
  });
  const {
    data: photoData,
    isLoading,
    isError,
    isSuccess,
    isPlaceholderData,
  } = useSearchPhoto(filter);
  const { data: photoDetailList, isLoading: isLoadingDetails } = useGetPhotos(
    (photoData?.results ?? []).map(photo => photo.id),
  );
  const onPageChange = (event: PaginatorPageChangeEvent) => {
    if (titleRef?.current?.scrollIntoView)
      titleRef?.current?.scrollIntoView({ behavior: "smooth" });
    setFilter(oldFilter => ({
      ...oldFilter,
      page: event.page + 1,
    }));
  };

  useEffect(() => {
    if (titleRef?.current?.scrollIntoView)
      titleRef?.current?.scrollIntoView({ behavior: "smooth" });
    setFilter({ page: 1, pageSize: ROWS_PER_PAGE, tag: tag ?? "" });
  }, [tag]);
  return (
    <TagSearchContainer>
      <TagSearchTitle ref={titleRef}>
        <FormattedMessage id="tagSearch.title" /> {tag}
      </TagSearchTitle>
      {isSuccess && !isPlaceholderData && photoData.results.length > 0 && (
        <>
          <GalleryContainer>
            {photoData.results.map(photo => {
              const tags = photoDetailList?.find(p => p.id === photo.id)?.tags;
              return (
                <Photo
                  id={photo.id}
                  author={photo.user.name}
                  createdAt={photo.createdAt}
                  imgSrc={photo.urls.regular}
                  tags={(tags ?? []).map(t => t.title)}
                  key={photo.id}
                  loadingTags={isLoadingDetails}
                />
              );
            })}
          </GalleryContainer>
          {photoData.totalPages > 1 && (
            <Paginator
              data-testid="paginator"
              first={(filter.page - 1) * filter.pageSize}
              rows={filter.pageSize}
              totalRecords={photoData.total}
              onPageChange={onPageChange}
            />
          )}
        </>
      )}
      {(isLoading || isPlaceholderData) && (
        <GalleryContainer>
          {Array.from({ length: ROWS_PER_PAGE }, (_, idx) => (
            <Skeleton width="100%" height="18rem" key={idx} />
          ))}
        </GalleryContainer>
      )}
      {isError && <Maintenance />}

      {isSuccess && photoData.results.length == 0 && <NoData />}
    </TagSearchContainer>
  );
}
export default TagSearch;
