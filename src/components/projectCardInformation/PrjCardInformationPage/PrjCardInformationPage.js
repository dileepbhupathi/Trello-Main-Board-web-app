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


const projectCardHeaederDescriptionLink = "projectCardHeaederDescriptionLink";
const header = "in list";

const PrjCardInformationPage = ({
  selectedCardId,
  eachBoardItem,
  isWatch,
  changesToWatch,
  removeWatch,
  isTemplate,
  changesToTemplate,
  removesTemplate,
  isHideFromList,
  isShowInList,
  hideFromList,
  showInList,
  isDelete,
  isArchive,
  isSendToBoard,
  sendToBoard,
  sendToArchive,
}) => {
  return (
    <div className="card-information-body">
      <div className="card-information-header">
        <PrjCardHeaderTitle projectCardHeaderTitle={selectedCardId.content} />
        <PrjCardHeaderDescription
          projectCardHeaderDescription={eachBoardItem.Name}
          projectCardHeaederDescriptionLink={projectCardHeaederDescriptionLink}
          header={header}
        />
        <div className="card-content-information">
          <div className="card-left-information">
            <PrjCardMember />
            <PrjCardDateCheckbox
              selectedCardId={selectedCardId}
              eachBoardItem={eachBoardItem}
            />
            <PrjCardDescription
              selectedCardId={selectedCardId}
              eachBoardItem={eachBoardItem}
            />
            <PrjCardAttachment />
            <PrjCardCheckbox
              eachBoardItem={eachBoardItem}
              selectedCardId={selectedCardId}
            />
            <PrjCardActivity
              eachBoardItem={eachBoardItem}
              selectedCardId={selectedCardId}
            />
          </div>
          <div className="card-right-information">
            <RightPopup
              isWatch={isWatch}
              changesToWatch={changesToWatch}
              removeWatch={removeWatch}
              isTemplate={isTemplate}
              changesToTemplate={changesToTemplate}
              removesTemplate={removesTemplate}
              isHideFromList={isHideFromList}
              hideFromList={hideFromList}
              isShowInList={isShowInList}
              showInList={showInList}
              isDelete={isDelete}
              isArchive={isArchive}
              isSendToBoard={isSendToBoard}
              sendToBoard={sendToBoard}
              sendToArchive={sendToArchive}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrjCardInformationPage;
