import { Button, Card, Checkbox, Popover, Select } from "antd";
import React from "react";
import { MdContentCopy } from "react-icons/md";
import { Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { MoveBoardData, MoveBoardListData, MoveBoardPositionData } from "../../Constants/MoveBoardOptions/MoveBoardData";



export const Copy = () => {

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

  return (
    <>
      <Popover trigger="click" title="Copy Card" content={copyCardContent}>
        <Button className="action-button-list">
          <MdContentCopy className="button-list-icons" /> Copy
        </Button>
      </Popover>
    </>
  );
};
