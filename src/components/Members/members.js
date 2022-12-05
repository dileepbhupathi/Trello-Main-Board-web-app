import React from 'react';
import '../RightPopup/RightPopup.scss';
import { Button,Input,Popover } from 'antd';
import PropTypes from 'prop-types';
// import {BsPerson} from "react-icons/bs";

import {
    UserOutlined,
  } from "@ant-design/icons";

export const Members = ({label1}) => {
    const members=(
        <div className="right-top-popover-container">
            <hr/>
            <Input placeholder="Search members" />
            <Button className="bottom-btn">Show other workspace members</Button>
        </div>
    );
  return (
        <Popover content={members} trigger="click" title={label1}>
            <Button className='right-container-button' icon={<UserOutlined/>}>
              {/* <span className='icon'><BsPerson/> </span>  
              <span className='label'>{label1}</span>   */}
              {label1}
                {/* {icon}
                {label} */}
            </Button>
        </Popover> 
    
  );
}
Members.propTypes = {
    label1 : PropTypes.string.isRequired
    // icon : PropTypes.object.isRequired
    }
    
Members.defaultProps = {
  label1 : "Members",
}