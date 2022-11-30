import React from "react";
import "./RightPopup.scss";
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
import {Members} from '../Members/members';
import { Labels } from "../Labels/labels";
import { Checklist } from "../Checklist/checklist";
import { Dates } from "../Dates/dates";
import { Attachment } from "../Attachment/attachment";
import { Cover } from "../Cover/cover";


function RightPopup() {

  return (
    <>
    <div className="right-top-container">
      <h3>Add to card</h3>
      <Members/>
      <Labels/>   
      <Checklist/>     
      <Dates/>
      <Attachment/>
      <Cover/>
      <ContentComponent/>
      </div>
      </>
  );
}
export default RightPopup;



