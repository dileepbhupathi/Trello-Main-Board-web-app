import React from "react";
import { Trail } from "../view/Trail/Trail";



export default {
    title: "Trail",
    component: Trail,
  };
 const TrailStories = (args) => <Trail {...args} />;
  
  export const TrailStoryBook = TrailStories.bind({});
 TrailStoryBook.args = {
    label: "Start free trail",
  };
