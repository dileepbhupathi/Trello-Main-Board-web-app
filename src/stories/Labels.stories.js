import React from "react";
import { Labels } from "../view/Labels/labels";
// import { Labels } from "../components/Labels/labels";



export default {
    title: "Labels",
    component: Labels,
  };
 const LabelsStories = (args) => <Labels {...args} />;
  
  export const LabelsStoryBook = LabelsStories.bind({});
 LabelsStoryBook.args = {
    label: "Labels",
  };
