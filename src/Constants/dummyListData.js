// import uuid from "uuid/v4";
import { v4 as uuidv4 } from "uuid";

// export const dummyListData = [
//   { id:1, title: "Project Resource", task: ["Weekly Updates",'Tasks Done'] },
//   { id:2,title: "Done", task: ["Monthly Updates"] },
//   { id:3, title: "Pending", task: ["stakeholders"] },
// ];

export const dummyListData = {
  [uuidv4()]:{
    
    name: "Project Resource",
    task: [
      { id: uuidv4(), content: "Trello Tip: Card labels! What do they mean? (Click for more info)" },
      { id: uuidv4(), content: 'Project "Teamwork Dream Work" Launch Timeline' },
    ],
  },
  [uuidv4()]:{ 
    
    name: "Questions For Next Meeting",
    task: [
      { id: uuidv4(), content: "Trello Tip: 🌊Slide your Q's into this handy list so your team keeps on flowing." },
      { id: uuidv4(), content: "Who's the best person to fix my HTML snag?" },
    ],
  },
  [uuidv4()]:{
     
    name: "Pending",
    task: [
      { id: uuidv4(), content: "Trello Tip: This is where assigned tasks live so that your team can see who's working on what and when it's due." },
      { id: uuidv4(), content: "Sketch site banner" },
    ],
  },
};
