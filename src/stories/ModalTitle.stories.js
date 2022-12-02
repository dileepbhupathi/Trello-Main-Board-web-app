import React from "react";
import ModalTitle from "../components/ModalTitle/ModalTitle";

export default {
  title: "ModalTitle",
  component: ModalTitle,
};

const ModalTitleComponent = (args) => <ModalTitle {...args} />;

export const ModalTitleLabels = ModalTitleComponent.bind({});
ModalTitleLabels.args = {
  label: "in list ",
};
