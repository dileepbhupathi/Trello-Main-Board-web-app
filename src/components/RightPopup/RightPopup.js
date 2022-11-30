import React from "react";
import "./RightPopup.scss";
import {ContentComponent} from '../ContentComponents/Content'
import {Members} from '../Members/members';
import { Labels } from "../Labels/labels";
import { Checklist } from "../Checklist/checklist";
import { Dates } from "../Dates/dates";
import { Attachment } from "../Attachment/attachment";
import { Cover } from "../Cover/cover";


function RightPopup() {

  return (
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
  );
}
export default RightPopup;



