import { Button } from "antd";
import React from "react";
import { TiArchive } from "react-icons/ti";
import { SlReload } from "react-icons/sl";
import { AiOutlineMinus } from "react-icons/ai";

export const ArchiveButton = ({
  isArchive,
  sendToBoard,
  isSendToBoard,
  sendToArchive,
  isHideFromList,
  hideFromList,
  isShowInList,
  showInList,
  isDelete,
}) => {
  return (
    <>
      {isArchive ? null : (
        <Button className="action-button-list" onClick={sendToBoard}>
          <TiArchive className="button-list-icons" />
          Archive
        </Button>
      )}
      {isSendToBoard ? (
        <Button className="action-button-list" onClick={sendToArchive}>
          <span>
            <SlReload className="button-list-icons" /> Send to Board
          </span>
        </Button>
      ) : null}
      {isHideFromList ? (
        <Button className="action-button-list" onClick={hideFromList}>
          <span>
            <TiArchive className="button-list-icons" /> Hide from List
          </span>
        </Button>
      ) : null}
      {isShowInList ? (
        <Button className="action-button-list" onClick={showInList}>
          <span>
            <SlReload className="button-list-icons" /> Show in List
          </span>
        </Button>
      ) : null}
      {isDelete ? (
        <Button type="primary" danger className="delete-button">
          <AiOutlineMinus className="delete-icon" />
          Delete
        </Button>
      ) : null}
    </>
  );
};
