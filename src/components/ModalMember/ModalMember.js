import "./ModalMember.scss";
import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { Space, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const ModalMember = ({ label1, label2, label3, backgroundColor }) => {
  const { Text } = Typography;
  return (
    <>
      <Space align="top" direction="vertical">
        <Text type="secondary">Members</Text>
        <Space>
          <div className="member" style={backgroundColor && { backgroundColor }}>{label1}</div>
          <div className="member" style={backgroundColor && { backgroundColor }}>{label2}</div>
          <div className="member" style={backgroundColor && { backgroundColor }}>{label3}</div>
          <PlusCircleOutlined style={{ fontSize: "30px" }}/>
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
  backgroundColor: PropTypes.string,
  
};
ModalMember.defaultProps = {
  backgroundColor: 'rgb(3, 94, 3)',
};