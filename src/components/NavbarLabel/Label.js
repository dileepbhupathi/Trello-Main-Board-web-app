import React from "react";
import { Card, Checkbox, Col, Input, List, Popover, Row } from "antd";
import "./Label.scss";
import { LabelData } from "../../Constants/LabelData/LabelData";

export const Label = () => {
  const content = (
    <List
    className="label-list"
      dataSource={LabelData}
      renderItem={(item) => (
        <List.Item className="label-list-item">
          <Row>
            <Col span={24}>
              <Checkbox className="label-list-checkbox">
                <div style={{ backgroundColor: item.checkboxColor }} className='checkbox-item-container'>
                  <Card style={{ backgroundColor: item.cardColor }} className='checkbox-item-card'></Card>
                  <p>{item.title}</p>
                </div>
              </Checkbox>
            </Col>
          </Row>
        </List.Item>
      )}
    ></List>
  );

  return (
    <>
      <Popover
        trigger="click"
        content={content}
        // title="Title"
        className="pop-over"
      >
        <Input
          type="primary"
          className="select-labels-input"
          placeholder="Select labels"
        />
      </Popover>
    </>
  );
};
