import React from "react";
import "./RightPopup.scss";
import { ContentComponent } from "../ContentComponents/Content";
import { Members } from "../../view/Members/members";
import { Labels } from "../../view/Labels/labels";
import { Checklist } from "../../view/Checklist/checklist";
import { Dates } from "../../view/Dates/dates";
import { Attachment } from "../../view/Attachment/attachment";
import { Cover } from "../../view/Cover/cover";
import { Trail } from "../../view/Trail/Trail";


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
      <Trail/>
      <ContentComponent/>
      </div>
    </>
  );
}
export default RightPopup;
