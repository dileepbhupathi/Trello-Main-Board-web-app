import React from "react";
import { LabelListItem } from "./LabelListItem";



export default {
    title: "LabelsListItem",
    component: LabelListItem,
    argTypes:{
        backgroundColor:{control:"color"},
        innerBackgroundColor:{control:"color"},
    },
  };
 const LabelListItemStories = (args) => <LabelListItem {...args} />;
  
export const LabelListItemStoryBook = LabelListItemStories.bind({});
LabelListItemStoryBook.args = {
    LabelColorName: "ColorName",
  };
