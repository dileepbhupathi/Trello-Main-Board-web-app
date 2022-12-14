import React from "react";
// import {Attachment} from "../components/Attachment/attachment";
import {Attachment} from "../view/Attachment/attachment";




export default {
    title: "Attachments",
    component: Attachment,
  };
 const AttachmentStories = (args) => <Attachment {...args} />;
  
  export const AttachmentStoryBook = AttachmentStories.bind({});
  AttachmentStoryBook.args = {
    label: "Attachment",
  };
