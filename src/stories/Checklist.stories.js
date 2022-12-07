import React from "react";
// import {Checklist} from "../components/Checklist/checklist";
import {Checklist} from "../view/Checklist/checklist";




export default {
    title: "Checklist",
    component: Checklist,
  };
 const ChecklistStories = (args) => <Checklist {...args} />;
  
  export const ChecklistStoryBook = ChecklistStories.bind({});
  ChecklistStoryBook.args = {
    label: "Checklist",
  };
