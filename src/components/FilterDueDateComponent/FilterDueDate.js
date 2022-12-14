import React from "react";
import { SlCalender } from "react-icons/sl";
import { BiTimeFive } from "react-icons/bi";
import { Checkbox, Col, Row, Typography } from "antd";

export const FilterDueDate = () => {
  const { Text } = Typography;

  return (
    <div>
      <Text className="filter-caption">Due date</Text>
      <ul>
        <li>
          <Row>
            <Col span={24}>
              <Checkbox className="members-list">
                <span className="time-icon-due-month-container">
                  <SlCalender />
                </span>
                No dates
              </Checkbox>
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col span={24}>
              <Checkbox className="members-list">
                <span className="time-icon-container">
                  <BiTimeFive className="time-icon" />
                </span>
                overdue
              </Checkbox>
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col span={24}>
              <Checkbox className="members-list">
                <span className="time-icon-due-container">
                  <BiTimeFive className="time-icon" />
                </span>
                Due in the next day
              </Checkbox>
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col span={24}>
              <Checkbox className="members-list">
                <span className="time-icon-due-month-container">
                  <BiTimeFive />
                </span>
                Due in the next week
              </Checkbox>
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col span={24}>
              <Checkbox className="members-list">
                <span className="time-icon-due-month-container">
                  <BiTimeFive />
                </span>
                Due in the next month
              </Checkbox>
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col span={24}>
              <Checkbox className="members-list">Marked as complete</Checkbox>
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col span={24}>
              <Checkbox className="members-list">
                Not marked as complete
              </Checkbox>
            </Col>
          </Row>
        </li>
      </ul>
    </div>
  );
};
