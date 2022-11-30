import React from 'react';
import '../RightPopup/RightPopup.scss';
import { Button,Input,Popover } from 'antd';
import {
    UserOutlined,
  } from "@ant-design/icons";

export const Members = () => {
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
                <UserOutlined />
                Members
            </Button>
        </Popover> 
    
  );
}
