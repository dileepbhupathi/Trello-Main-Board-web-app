import React from "react";
// import { Dates } from "../components/Dates/dates";
import { Dates } from "../view/Dates/dates";




export default {
    title: "Dates",
    component: Dates,
  };
 const DatesStories = (args) => <Dates {...args} />;
  
  export const DatesStoryBook = DatesStories.bind({});
  DatesStoryBook.args = {
    label: "Dates",
  };
