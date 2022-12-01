import "./ModalMember.scss";
import React from "react";
import PropTypes from "prop-types";

import { Space, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
const ModalMember = ({ label1, label2, label3 }) => {
  const { Title } = Typography;
  return (
    <>
      <Space align="top" direction="vertical">
        <Title level={5} type="secondary">Members</Title>
        <Space>
          <div
            className="member"
          >
            {label1}
          </div>
          <div
            className="member"
          >
            {label2}
          </div>
          <div
            className="member"
          >
            {label3}
          </div>
          <PlusCircleOutlined style={{ fontSize: "30px" }} />
        </Space>
      </Space>
    </>
  );
};

export default ModalMember;

ModalMember.propTypes = {
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  label3: PropTypes.string.isRequired,
  
};
ModalMember.defaultProps = {
  label1: "S",
  label2: "P",
  label3: "D",
  
};
