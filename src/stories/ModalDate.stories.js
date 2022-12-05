import React from "react";
import ModalDate from "../components/ModalDate/ModalDate";

export default {
  title: "ModalDate",
  component: ModalDate,
};

const ModalDateComponent = (args) => <ModalDate {...args} />;

export const ModalDateLabels = ModalDateComponent.bind({});
ModalDateLabels.args = {
  label: "Due date",
};
