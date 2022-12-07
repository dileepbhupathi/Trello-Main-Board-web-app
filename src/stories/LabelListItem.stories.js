import React from "react";
import { LabelListItem } from "../components/LabelListItem/LabelListItem";



export default {
    title: "LabelsListItem",
    component: LabelListItem,
  };
 const LabelListItemStories = (args) => <LabelListItem {...args} />;
  
export const LabelListItemStoryBook = LabelListItemStories.bind({});
LabelListItemStoryBook.args = {
    label: "Labels",
  };
