import React from "react";
import { FaCopy } from "react-icons/fa";
import {
  BiTimeFive,
  BiRightArrowAlt,
  BiMinus,
  BiSortDown,
} from "react-icons/bi";
import { BsPersonFill, BsFillTagFill } from "react-icons/bs";
import { Button, Card, Popover, Typography } from "antd";
import { AiOutlinePlus } from "react-icons/ai";

export const ModalAddButton = () => {
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

  return (
    <div>
      <Text className="power-ups-title">Automation</Text>
      <div className="add-buttons-list-container">
        <Popover content={content} title="add button" trigger="click">
          <Button className="add-power-ups-button">
            <AiOutlinePlus className="button-list-icons" />
            Add Button
          </Button>
        </Popover>
      </div>
    </div>
  );
};
