import { Button,Typography} from "antd";
import React from "react";
import "./Content.scss";
import {  BsShare} from "react-icons/bs";
// import { CgTemplate } from "react-icons/cg";
// import { FiEye } from "react-icons/fi";


// import { TiTick } from "react-icons/ti";

import { TemplateButton } from "../TemplateButton/TemplateButton";
import { WatchButton } from "../WatchButton/WatchButton";
import { ArchiveButton } from "../ArchiveButton/ArchiveButton";
import { Move } from "../MoveButton/Move";
import { Copy } from "../CopyButton/Copy";
import { ModalAddButton } from "../ModalAddButtonComponent/ModalAddButton";
import { ModalAddPowerups } from "../ModalAddPowerupsComponent/ModalAddPowerups";

export const ContentComponent = ({
  isWatch,
  changesToWatch,
  removeWatch,
  isTemplate,
  removesTemplate,
  changesToTemplate,
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

  const { Text } = Typography;

  

  return (
    <div className="content-container">
      <ModalAddPowerups/>
      <ModalAddButton/>
      <div>
        <Text className="power-ups-title">Actions</Text>
        <div className="action-button-list-container">
          <Move />
          <Copy />
          <TemplateButton
            isTemplate={isTemplate}
            changesToTemplate={changesToTemplate}
            removesTemplate={removesTemplate}
          />
          <WatchButton
            isWatch={isWatch}
            changesToWatch={changesToWatch}
            removeWatch={removeWatch}
          />
        </div>
      </div>
      <hr />
      <div>
        <ArchiveButton
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
        <Button className="action-share-button-list">
          {" "}
          <BsShare className="button-list-icons" /> Share
        </Button>
      </div>
    </div>
  );
};
