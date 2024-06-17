import { Skeleton } from "primereact/skeleton";
import { useGetPhotos, useRandomPhotos } from "../../api/hooks/photo";
import Photo from "../../components/Photo/Photo";
import { GalleryContainer } from "../../components/Photo/Photo.styled";
import { HomeContainer, HomeTitle } from "./Home.styled";
import { FormattedMessage } from "react-intl";
import Maintenance from "../../components/Maintenance/Maintenance";
import NoData from "../../components/NoData/NoData";
import { ROWS_PER_PAGE } from "../../../config";

function Home() {
  const { data: photos, isLoading, isError, isSuccess } = useRandomPhotos();
  const { data: photoDetailList, isLoading: isLoadingDetails } = useGetPhotos(
    (photos ?? []).map(photo => photo.id),
  );
  return (
    <HomeContainer>
      <HomeTitle>
        <FormattedMessage id="home.title" />
      </HomeTitle>
      {isSuccess && photos.length > 0 && (
        <GalleryContainer>
          {photos.map(photo => {
            const tags = photoDetailList?.find(p => p.id === photo.id)?.tags;
            return (
              <Photo
                id={photo.id}
                author={photo.user.name}
                createdAt={photo.createdAt}
                imgSrc={photo.urls.regular}
                tags={(tags ?? []).map(tag => tag.title)}
                key={photo.id}
                loadingTags={isLoadingDetails}
              />
            );
          })}
        </GalleryContainer>
      )}
      {isLoading && (
        <GalleryContainer>
          {Array.from({ length: ROWS_PER_PAGE }, (_, idx) => (
            <Skeleton width="100%" height="18rem" key={idx} />
          ))}
        </GalleryContainer>
      )}
      {isError && <Maintenance />}
      {isSuccess && photos.length == 0 && <NoData />}
    </HomeContainer>
  );
}
export default Home;
