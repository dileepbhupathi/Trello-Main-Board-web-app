import React from "react";
import {Cover} from "../view/Cover/cover";

export default {
    title: "Cover",
    component: Cover,
  };
 const CoverStories = (args) => <Cover {...args} />;
  
  export const CoverStoryBook = CoverStories.bind({});
  CoverStoryBook.args = {
    label: "Cover",
  };
