import React from "react";
import ModalDescription from "../components/ModalDescription/ModalDescription";

export default {
    title:"ModalDescription",
    component:ModalDescription
}

const ModalDescriptionComponent = (args) => <ModalDescription {...args}/>

export const ModalDescriptionLabels = ModalDescriptionComponent.bind({});
ModalDescriptionLabels.args = {
    label:"Description",
    EditButtonLabel:"Edit",
    CancleButtonLabel:"Cancle",
}