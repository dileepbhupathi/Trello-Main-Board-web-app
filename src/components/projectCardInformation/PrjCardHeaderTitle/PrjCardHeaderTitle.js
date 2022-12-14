import React from 'react';
import { Space, Typography } from "antd";
import "./PrjCardHeaderTitle.scss";
import { PicCenterOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
const PrjCardHeaderTitle = ({projectCardHeaderTitle,icon}) => {
  const { Title} = Typography;
  return (
    <div className="project-catd-title-container">
      <Space align="top" direction="horizontal">
        <span style={{fontSize:'30px'}}>{icon}</span>
        <Title level={3}>{projectCardHeaderTitle}</Title>
      </Space>
    </div>
  );
};

export default PrjCardHeaderTitle;

PrjCardHeaderTitle.propTypes = {
  icon:PropTypes.object.isRequired,
  projectCardHeaderTitle:PropTypes.string.isRequired
}
PrjCardHeaderTitle.defaultProps = {
  icon:<PicCenterOutlined/>,
  projectCardHeaderTitle:'projectCardHeaderTitle'
}