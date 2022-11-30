import { Button, Card, Popover, Select } from "antd";
import React from "react";
import { Typography } from "antd";
import {BsArrowRight} from 'react-icons/bs'
import { MoveBoardData, MoveBoardListData, MoveBoardPositionData } from "../../Constants/MoveBoardOptions/MoveBoardData";

export const Move = () => {

  const { Text } = Typography;

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

  return (
    <>
      <Popover content={moveCardContent} trigger="click" title="Move card">
        <Button className="action-button-list">
          <BsArrowRight className="button-list-icons" /> Move
        </Button>
      </Popover>
    </>
  );
};
