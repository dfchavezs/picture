import { NoDataContainer } from "./NoData.styled";
import BookImg from "../../assets/png/book.png";
import { FormattedMessage } from "react-intl";
function NoData() {
  return (
    <NoDataContainer>
      <img src={BookImg} alt="Book image" />
      <h2>
        <FormattedMessage id="noPhotos.title" />
      </h2>
    </NoDataContainer>
  );
}
export default NoData;
