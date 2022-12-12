import React from "react"
// import { AddCardInToList } from "../components/AddCardInToList/addCardInToList";
import { AddCardToList } from "../components/AddCardToList/addCardToList";
export default{
    title:'Add Card',
    component:AddCardToList

}
  const AddCardInToList = (args) =>  <AddCardToList {...args}/>
// export const Primary = () => <AddCard backgroundColor="blue" label="Button" />;


 export const onAdd = AddCardInToList.bind({});
 // More on args: https://storybook.js.org/docs/react/writing-stories/args
 onAdd.args = {

   label: 'Add CARD',
 };

