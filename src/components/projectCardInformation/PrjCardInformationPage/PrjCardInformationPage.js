import "./PrjCardInformationPage.scss";

import PrjCardMember from "../PrjCardMember/PrjCardMember";
import PrjCardActivity from "../PrjCardActivity/PrjCardActivity";
import PrjCardHeaderTitle from "../PrjCardHeaderTitle/PrjCardHeaderTitle";
import PrjCardHeaderDescription from "../PrjCardHeaderDescription/PrjCardHeaderDescription";
import PrjCardDateCheckbox from "../PrjCardDateCheckbox/PrjCardDateCheckbox";
import PrjCardDescription from "../PrjCardDescription/PrjCardDescription";
import PrjCardCheckbox from "../PrjCardCheckList/PrjCardCheckList";
import PrjCardAttachment from "../PrjCardAttachment/PrjCardAttachment";
import RightPopup from "../../RightPopup/RightPopup";

const projectCardHeaderTitle = "projectCardHeaderTitle";
const projectCardHeaderDescription = "projectCardHeaderDescription";
const projectCardHeaederDescriptionLink = "projectCardHeaederDescriptionLink";
const header = "in list";
const projectCardDescription = "projectCardDescription";

const PrjCardInformationPage = () => {
  return (
    <div className="card-information-body">
      <div className="card-information-header">
        <PrjCardHeaderTitle projectCardHeaderTitle={projectCardHeaderTitle} />
        <PrjCardHeaderDescription
          projectCardHeaderDescription={projectCardHeaderDescription}
          projectCardHeaederDescriptionLink={projectCardHeaederDescriptionLink}
          header={header}
        />
        <div className="card-content-information">
          <div className="card-left-information">
            <PrjCardMember />
            <PrjCardDateCheckbox />
            <PrjCardDescription
              projectCardDescription={projectCardDescription}
            />
            <PrjCardAttachment />
            <PrjCardCheckbox />
            <PrjCardActivity />
          </div>
          <div className="card-right-information"><RightPopup/></div>
        </div>
      </div>
    </div>
  );
};

export default PrjCardInformationPage;
