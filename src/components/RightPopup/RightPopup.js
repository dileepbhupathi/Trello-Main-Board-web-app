import React, { useState } from "react";
import "./RightPopup.scss";
import { ContentComponent } from "../ContentComponents/Content";
import { Members } from "../../view/Members/members";
import { Labels } from "../../view/Labels/labels";
import { Checklist } from "../../view/Checklist/checklist";
import { Dates } from "../../view/Dates/Date";
import { Attachment } from "../../view/Attachment/attachment";
import { Cover } from "../../view/Cover/cover";
import { Button, Modal } from "antd";
import {PicCenterOutlined} from '@ant-design/icons'


<<<<<<< HEAD

=======
>>>>>>> 94182adf89eea90f17fd005aca5cbeb194ab2ae0
function RightPopup({
  isWatch,
  changesToWatch,
  removeWatch,
  isTemplate,
  changesToTemplate,
  removesTemplate,
  isHideFromList,
  hideFromList,
  isSendToBoard,
  isShowInList,
  isArchive,
  isDelete,
  sendToArchive,
  sendToBoard,
  showInList,
}) {


  return (
    <>
      <div className="right-top-container">
        <h3>Add to card</h3>
        <Members />
        <Labels />
        <Checklist />
        <Dates />
        <Attachment />
        <Cover />
        <Trail/>
        <ContentComponent
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
    </>
  );
}
export default RightPopup;
