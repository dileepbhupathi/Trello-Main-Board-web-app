import React from "react";
import PrjCardDescription from "../components/projectCardInformation/PrjCardDescription/PrjCardDescription";

export default {
    title:"PrjCardDescription",
    component:PrjCardDescription
}

const PrjCardDescriptionComponent = (args) => <PrjCardDescription {...args}/>

export const PrjCardDescriptionLabels = PrjCardDescriptionComponent.bind({});
PrjCardDescriptionLabels.args = {
    header:"Description",
    EditButtonLabel:"Edit",
    CancleButtonLabel:"Cancle",
}