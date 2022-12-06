import "./ModalPage.scss";
import ModalTitle from "../../components/ModalTitle/ModalTitle";
import ModalDescription from "../../components/ModalDescription/ModalDescription";
import ModalActivity from "../../components/ModalActivity/ModalActivity";
import ModalCheckbox from "../../components/ModalCheckbox/ModalCheckbox";
import ModalAttachment from "../../components/ModalAttachment/ModalAttachment";
import RightPopup from "../RightPopup/RightPopup";

const modaltitle = "This is the description of the clicked card";
const modaldescription = "This is the title of the cliked card listitem";
const description = "This will be the existing description";
const ModalPage = ({
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
    <div className="modal-main">
      <div className="modal-page-left">
        <ModalTitle
          modaltitle={modaltitle}
          modaldescription={modaldescription}
        />
        <ModalDescription description={description} />
        <ModalAttachment />
        <ModalCheckbox />
        <ModalActivity />
      </div>
      <div className="modal-page-right">
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
  );
};

export default ModalPage;
