import React from "react";
import ModalLabel from "../components/ModalLabel/ModalLabel";
export default {
  title: "ModalLabel",
  component: ModalLabel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const ModalLabelComponent = (args) => <ModalLabel {...args} />;

export const ModalLabelLabels = ModalLabelComponent.bind({});
ModalLabelLabels.args = {
  label: "Labels",
};
