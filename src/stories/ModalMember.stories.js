import React from "react";
import ModalMember from "../components/ModalMember/ModalMember";

export default {
  title: "ModalMember",
  component: ModalMember,
};

const ModalMemeberComponent = (args) => <ModalMember {...args} />;

export const ModalMemberLabels = ModalMemeberComponent.bind({});
ModalMemberLabels.args = {
  label1: "S",
  label2: "P",
  label3: "D",
};
