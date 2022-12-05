import React from "react";
// import "../components/RightPopup/RightPopup.scss";
import { Members } from "../components/Members/members";


export default {
    title: "Members",
    component: Members,
  };
 const MembersStories = (args) => <Members {...args} />;
  
  export const MembersStoryBook = MembersStories.bind({});
  MembersStoryBook.args = {
    label1: "Members",
  };