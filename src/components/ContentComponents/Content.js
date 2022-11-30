import { Button, Card, Popover } from "antd";
import React, { useState } from "react";
import "./Content.scss";
import { Typography } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import {
  BsPersonFill,
  BsShare,
  BsFillTagFill,
} from "react-icons/bs";
// import { CgTemplate } from "react-icons/cg";
// import { FiEye } from "react-icons/fi";
import {
  BiTimeFive,
  BiRightArrowAlt,
  BiMinus,
  BiSortDown,
} from "react-icons/bi";
import { FaCopy } from "react-icons/fa";

// import { TiTick } from "react-icons/ti";

import { TemplateButton } from "../TemplateButton/TemplateButton";
import { WatchButton } from "../WatchButton/WatchButton";
import { ArchiveButton } from "../ArchiveButton/ArchiveButton";
import { Move } from "../MoveButton/Move";
import { Copy } from "../CopyButton/Copy";

export const ContentComponent = () => {
  const { Text } = Typography;

  const content = (
    <div className="create-button-list-container">
      <hr />
      <div className="button-templates-title-container">
        <Text>Button templates</Text>
        <div className="crate-buttons-list">
          <Card className="create-button-card">
            <BiRightArrowAlt className="create-button-icon" /> Move card to...
          </Card>
          <Card className="create-button-card">
            <FaCopy className="create-button-icon" /> Copy card to...
          </Card>
          <Card className="create-button-card">
            <BsFillTagFill className="create-button-icon" /> Add label...
          </Card>
          <Card className="create-button-card">
            <BsPersonFill className="create-button-icon" /> Join card
          </Card>
          <Card className="create-button-card">
            <BiTimeFive className="create-button-icon" /> Set due date or start
            date
          </Card>
          <Card className="create-button-card">
            <BiTimeFive className="create-button-icon" /> Mark due date...
          </Card>
          <Card className="create-button-card">
            <BiMinus className="create-button-icon" /> Remove...
          </Card>
          <Card className="create-button-card">
            <BiSortDown className="create-button-icon" /> Sort list...
          </Card>
        </div>
        <Text className="description">
          All members on the board can see your card buttons. You can edit the
          visibility in the{" "}
          <a href="/" className="anchor-element">
            Butler directory
          </a>
          .
        </Text>
      </div>
      <hr />
      <Button className="create-button-card">Create a costum button</Button>
    </div>
  );

  const [isTemplate, setIsTemplate] = useState(false);

  const changesToTemplate = () => {
    setIsTemplate(true);
    setIsHideFromList(true);
    setIsDelete(true);
    setIsArchive(true);
  };

  const removesTemplate = () => {
    setIsTemplate(false);
    setIsHideFromList(false);
    setIsDelete(false);
    setIsArchive(false);
  };

  const [isWatch, setIsWatch] = useState(false);

  const changesToWatch = () => {
    setIsWatch(true);
  };

  const removeWatch = () => {
    setIsWatch(false);
  };

  const [isHideFromList, setIsHideFromList] = useState();

  const hideFromList = () => {
    setIsHideFromList(false);
    setIsShowInList(true);
  };

  const [isShowInList, setIsShowInList] = useState(false);

  const showInList = () => {
    setIsShowInList(false);
    setIsHideFromList(true);
  };

  const [isDelete, setIsDelete] = useState(false);

  const [isArchive, setIsArchive] = useState(false);

  const [isSendToBoard, setIsSendToBoard] = useState(false);

  const sendToBoard = () => {
    setIsSendToBoard(true);
    setIsArchive(true);
    setIsDelete(true);
  };

  const sendToArchive = () => {
    setIsSendToBoard(false);
    setIsArchive(false);
    setIsDelete(false);
  };

  return (
    <div className="content-container">
      <div>
        <Text className="power-ups-title">Power-Ups</Text>
        <div>
          <Button className="add-power-ups-button">
            <AiOutlinePlus  className="button-list-icons"/>
            Add Power-Ups
          </Button>
        </div>
      </div>
      <div>
        <Text className="power-ups-title">Automation</Text>
        <div className="add-buttons-list-container">
          <Popover content={content} title="add button" trigger="click">
            <Button className="add-power-ups-button">
              <AiOutlinePlus  className="button-list-icons"/>
              Add Button
            </Button>
          </Popover>
        </div>
      </div>
      <div>
        <Text className="power-ups-title">Actions</Text>
        <div className="action-button-list-container">
          <Move/>
          <Copy/>
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
