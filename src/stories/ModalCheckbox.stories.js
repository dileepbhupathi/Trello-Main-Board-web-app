import React from "react";
import ModalCheckbox from "../components/ModalCheckbox/ModalCheckbox";

export default {
  title: "ModalCheckbox",
  component: ModalCheckbox,
};

const ModalCheckboxComponent = (args) => <ModalCheckbox {...args} />;

export const ModalCheckboxLabels = ModalCheckboxComponent.bind({});
ModalCheckboxLabels.args = {
  label: "Checkbox",
  DeleteButtonLabel:"Delete",
  AddCheckLabel:"Add an item"

};
