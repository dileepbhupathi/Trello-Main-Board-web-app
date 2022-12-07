import React from "react";
import {
  Card,
  Checkbox,
  Col,
  Input,
  List,
  Popover,
  Row,
  Typography,
} from "antd";
import "./Label.scss";
import { LabelData } from "../../Constants/LabelData/LabelData";

export const HeaderLabel = () => {
  const { Text } = Typography;

  const content = (
    <List
      className="label-list"
      dataSource={LabelData}
      renderItem={(item) => (
        <List.Item className="label-list-item">
          <Row>
            <Col span={24}>
              <Checkbox className="label-list-checkbox">
                <div
                  style={{ backgroundColor: item.checkboxColor }}
                  className="checkbox-item-container"
                >
                  <Card
                    style={{ backgroundColor: item.cardColor }}
                    className="checkbox-item-card"
                  ></Card>
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
    <div>
      <Text className="filter-caption">Labels</Text>
      <ul>
        <li>
          <Row>
            <Col span={24}>
              <Checkbox className="members-list">
                {/* <span className="time-icon-due-month-container"><TiTag className="person-icon"/></span> */}
                No labels
              </Checkbox>
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col span={24}>
              <Checkbox className="members-list">
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
              </Checkbox>
            </Col>
          </Row>
        </li>
      </ul>
    </div>
  );
};
