import React from "react";
import "./RightPopup.scss";
<<<<<<< HEAD
import {
  Button,
  Input,
  Select,
  Checkbox,
  List,
  Row,
  Col,
  Upload,
  message,
  Card,
  Skeleton,
  Popover,
} from "antd";
import {
  CheckSquareOutlined,
  FieldTimeOutlined,
  EditOutlined,
  TagOutlined,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Calendar from 'react-calendar';
import { dummyData, labelBgColorsData ,coverCardsBgColor,coverImages} from "../../Constants/RightPopupData/data";
import { GrAttachment } from "react-icons/gr";
import {ContentComponent} from '../ContentComponents/Content'
=======
import {Members} from '../Members/members';
import { Labels } from "../Labels/labels";
import { Checklist } from "../Checklist/checklist";
import { Dates } from "../Dates/dates";
import { Attachment } from "../Attachment/attachment";
import { Cover } from "../Cover/cover";
>>>>>>> 104efa55b3be1223dae36e0bbb9cdcb5913f6453


function RightPopup() {

  return (
    <div className="right-top-container">
      <h3>Add to card</h3>
<<<<<<< HEAD
      {/* {popoverData.map((popoverData)=>(
        <Popover content={popoverData.content} trigger="click" title={popoverData.title}>
        </Popover>
      ))} */}
      <Popover content={members} trigger="click" title="Members">
      <Button className="right-container-button">
        <UserOutlined />
        Members
      </Button>
      </Popover>  
      <Popover content={labels} trigger='click' title="labels">
      <Button className="right-container-button">
        <TagOutlined />
        Labels
      </Button>
      </Popover>
      <Popover content={checkList} trigger="click" title="Check List">
      <Button className="right-container-button">
        <CheckSquareOutlined />
        Checklist
      </Button>
      </Popover>      
      <Popover content={dates} trigger="click" title="Dates">
      <Button className="right-container-button">
        <FieldTimeOutlined />
        Dates
      </Button>
      </Popover>  
      <Popover content={attachment} trigger="click" title="Attachment">
      <Button className="right-container-button">
        <GrAttachment />
        Attachment
      </Button> 
      </Popover>
      <Popover content={cover} trigger="click" title="Cover">
      <Button className="right-container-button">
        <UserOutlined />
        Cover
      </Button>
      </Popover>
      <ContentComponent/>
=======
      <Members/>
      <Labels/>   
      <Checklist/>     
      <Dates/>
      <Attachment/>
      <Cover/>
>>>>>>> 104efa55b3be1223dae36e0bbb9cdcb5913f6453
    </div>
  );
}
export default RightPopup;



