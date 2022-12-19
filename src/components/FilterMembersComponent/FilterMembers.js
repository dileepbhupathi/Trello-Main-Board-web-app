import { Checkbox, Col, Row, Typography } from "antd";
import React from "react";
import { BsPerson } from "react-icons/bs";

export const FilterMembers = () => {
  const { Text } = Typography;

  return (
    <div className="filter-members">
      <Text className="filter-caption">Members</Text>
      <ul className="members-container">
        <li>
          <Row>
            <Col span={24}>
              <Checkbox value="" className="members-list">
                <span className="time-icon-due-month-container">
                  <BsPerson />
                </span>
                No memebers
              </Checkbox>
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col span={24}>
              <Checkbox value="" className="members-list">
                <span className="cards-assigned-container">DB</span>
                Cards assigned to me
              </Checkbox>
            </Col>
          </Row>
        </li>
      </ul>
    </div>
  );
};
