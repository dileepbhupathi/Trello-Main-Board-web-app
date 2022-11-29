import { Button, Card, Checkbox, Popover, Select } from "antd";
import React, { useState } from "react";
import "./Content.scss";
import { Typography } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPersonFill, BsShare,  BsFillTagFill, BsArrowRight } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { CgTemplate } from "react-icons/cg";
import { FiEye } from "react-icons/fi";
import { TiArchive } from "react-icons/ti";
import TextArea from "antd/es/input/TextArea";
import {
  BiTimeFive,
  BiRightArrowAlt,
  BiMinus,
  BiSortDown,
} from "react-icons/bi";
import { FaCopy } from "react-icons/fa";
import {
  MoveBoardData,
  MoveBoardListData,
  MoveBoardPositionData,
} from "../../Constants/MoveBoardOptions/MoveBoardData";
import { TiTick } from "react-icons/ti";
import { SlReload } from "react-icons/sl";
import { AiOutlineMinus } from "react-icons/ai";

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

  const MoveBoardOptions = [];
  for (let i = 0; i < MoveBoardData.length; i++) {
    MoveBoardOptions.push({ value: MoveBoardData[i], label: MoveBoardData[i] });
  }

  const moveBoardListOptions = [];
  for (let i = 0; i < MoveBoardListData.length; i++) {
    moveBoardListOptions.push({
      value: MoveBoardListData[i],
      label: MoveBoardListData[i],
    });
  }

  const moveBoardPositionOptions = [];
  for (let i = 0; i < MoveBoardPositionData.length; i++) {
    moveBoardPositionOptions.push({
      value: MoveBoardPositionData[i],
      label: MoveBoardPositionData[i],
    });
  }

  const moveCardContent = (
    <div className="move-card-popover">
      <hr />
      <Text className="move-board-card-title">Select destination</Text>
      <div className="move-board-cards-container">
        <Card className="move-card">
          <Text className="move-card-title">Board</Text>
          <Select
            defaultValue={MoveBoardOptions[2]}
            options={MoveBoardOptions}
            className="move-card-select-options"
          />
        </Card>
        <div className="move-card-list-position-container">
          <Card className=" move-card-1">
            <Text className="move-card-title">List</Text>
            <Select
              defaultValue={moveBoardListOptions[3]}
              options={moveBoardListOptions}
              className="move-card-select-options"
            />
          </Card>
          <Card className=" move-card-2">
            <Text className="move-card-title">position</Text>
            <Select
              defaultValue={moveBoardPositionOptions[3]}
              options={moveBoardPositionOptions}
              className="move-card-select-options"
            />
          </Card>
        </div>
      </div>
      <Button type="primary"> Move </Button>
    </div>
  );

  const copyCardContent = (
    <div className="move-card-popover">
      <hr />
      <Text className="move-card-title">Title</Text>
      <TextArea
        autoSize={{ minRows: 2, maxRows: 4 }}
        defaultValue={
          "Trello Tip: This is where assigned tasks live so that your team can see who's working on what and when it's due."
        }
      />
      <div className="keep-label">
        <Text className="move-card-title">Keep...</Text>
        <Checkbox className="label-checkbox">
          <Text>Label (1)</Text>
        </Checkbox>
      </div>
      <div className="keep-label">
        <Text>Copy to...</Text>
        <div className="move-board-cards-container">
          <Card className="move-card">
            <Text className="move-card-title">Board</Text>
            <Select
              defaultValue={MoveBoardOptions[2]}
              options={MoveBoardOptions}
              className="move-card-select-options"
            />
          </Card>
          <div className="move-card-list-position-container">
            <Card className=" move-card-1">
              <Text className="move-card-title">List</Text>
              <Select
                defaultValue={moveBoardListOptions[3]}
                options={moveBoardListOptions}
                className="move-card-select-options"
              />
            </Card>
            <Card className=" move-card-2">
              <Text className="move-card-title">position</Text>
              <Select
                defaultValue={moveBoardPositionOptions[3]}
                options={moveBoardPositionOptions}
                className="move-card-select-options"
              />
            </Card>
          </div>
        </div>
        <Button type="primary"> Create card </Button>
      </div>
    </div>
  );

  const [isTemplate, setIsTemplate] = useState(false);

  const changesToTemplate = () => {
    setIsTemplate(true);
    setIsHideFromList(true);
    setIsDelete(true);
    setIsArchive(true)

  };

  const removesTemplate = () => {
    setIsTemplate(false);
    setIsHideFromList(false);
    setIsDelete(false);
    setIsArchive(false)

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

  // const showInList = () => {
  //   setIsHideFromList(false)
  // }

  const [isShowInList, setIsShowInList] = useState(false);

  const showInList = () => {
    setIsShowInList(false);
    setIsHideFromList(true);
  };

  const [isDelete, setIsDelete] = useState(false);

  const [isArchive, setIsArchive] = useState(false)

  const [isSendToBoard, setIsSendToBoard] = useState(false)

  const sendToBoard = () => {
    setIsSendToBoard(true)
    setIsArchive(true)
    setIsDelete(true)
  }

  const sendToArchive = () => {
    setIsSendToBoard(false)
    setIsArchive(false)
    setIsDelete(false)
  }


  return (
    <div className="content-container">
      <div>
        <Text className="power-ups-title">Power-Ups</Text>
        <div>
          <Button className="add-power-ups-button">
            <AiOutlinePlus />
            Add Power-Ups
          </Button>
        </div>
      </div>
      <div>
        <Text className="power-ups-title">Automation</Text>
        <div className="add-buttons-list-container">
          <Popover content={content} title="add button" trigger="click">
            <Button className="add-power-ups-button">
              <AiOutlinePlus />
              Add Button
            </Button>
          </Popover>
        </div>
      </div>
      <div>
        <Text>Actions</Text>
        <div className="action-button-list-container">
          <Popover content={moveCardContent} trigger="click" title="Move card">
            <Button className="action-button-list">
              <BsArrowRight className="button-list-icons" /> Move
            </Button>
          </Popover>
          <Popover trigger="click" title="Copy Card" content={copyCardContent}>
            <Button className="action-button-list">
              <MdContentCopy className="button-list-icons" /> Copy
            </Button>
          </Popover>
          {isTemplate ? (
            <Button className="action-button-list" onClick={removesTemplate}>
              <CgTemplate className="button-list-icons" /> Template
              <span className="tick-icon-container">
                <TiTick className="tick-icon" />
              </span>
            </Button>
          ) : (
            <Button className="action-button-list" onClick={changesToTemplate}>
              <CgTemplate className="button-list-icons" /> Make template
            </Button>
          )}
          {isWatch ? (
            <Button className="action-button-list" onClick={removeWatch}>
              <FiEye className="button-list-icons" /> Watch{" "}
              <span className="tick-icon-container">
                <TiTick className="tick-icon" />
              </span>
            </Button>
          ) : (
            <Button className="action-button-list" onClick={changesToWatch}>
              <FiEye className="button-list-icons" /> Watch
            </Button>
          )}
        </div>
      </div>
      <hr />
      <div>
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
        <Button  className="action-share-button-list"> <BsShare className="button-list-icons"/> Share</Button>
      </div>
    </div>
  );
};
