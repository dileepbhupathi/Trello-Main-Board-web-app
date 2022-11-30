import React from "react";
import ModalAttachment from "../components/ModalAttachment/ModalAttachment";

export default {
  title: "ModalAttachment",
  component: ModalAttachment,
};

const ModalAttachmentComponent = (args) => <ModalAttachment {...args} />;

export const ModalAttachmentLabels = ModalAttachmentComponent.bind({});
ModalAttachmentLabels.args = {
  label: "Attachments",
};
