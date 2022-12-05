import React from 'react';
import '../RightPopup/RightPopup.scss';
import { Button,Input,Popover } from 'antd';
import PropTypes from 'prop-types';

import {
    UserOutlined,
  } from "@ant-design/icons";

export const Members = ({label,icon}) => {
    const members=(
        <div className="right-top-popover-container">
            <hr/>
            <Input placeholder="Search members" />
            <Button className="bottom-btn">Show other workspace members</Button>
        </div>
    );
  return (
        <Popover content={members} trigger="click" title="Members">
            <Button className="right-container-button">
                {/* <UserOutlined /> */}
                {/* Members */}
                {icon}
                {label}
            </Button>
        </Popover> 
    
  );
}
Members.propTypes = {
    label : PropTypes.string.isRequired,
    icon : PropTypes.object.isRequired
    }
    
  Members.defaultProps = {
    label : "Members",
  }