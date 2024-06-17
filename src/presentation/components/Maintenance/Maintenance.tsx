import { MaintenanceContainer } from "./Maintenance.styled";
import MaintenanceImg from "../../assets/png/maintenance.png";
import { FormattedMessage } from "react-intl";
function Maintenance() {
  return (
    <MaintenanceContainer>
      <img src={MaintenanceImg} alt="maintenance image" />
      <h2>
        <FormattedMessage id="maintenance.title" />
      </h2>
    </MaintenanceContainer>
  );
}
export default Maintenance;
