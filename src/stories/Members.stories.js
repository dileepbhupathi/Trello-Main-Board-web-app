import React from "react";
import { Members } from "../view/Members/members";


export default {
    title: "Members",
    component: Members,
  };
 const MembersStories = (args) => <Members {...args} />;
  
  export const MembersStoryBook = MembersStories.bind({});
  MembersStoryBook.args = {
    label1: "Members",
  };