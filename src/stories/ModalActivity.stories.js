import React from "react";
import ModalActivity from "../components/ModalActivity/ModalActivity";

export default {
  title: "ModalActivity",
  component: ModalActivity,
};

const ModalActivityComponent = (args) => <ModalActivity {...args} />;

export const ModalActivityLabels = ModalActivityComponent.bind({});
ModalActivityLabels.args = {
  label: "Activity",
};
