import React from "react";
import ModalMember from "../components/ModalMember/ModalMember";
import {
  PlusOutlined,
  PlusCircleOutlined,
  PlusSquareOutlined
} from "@ant-design/icons";
const iconsMap = {
  PlusCircle:<PlusCircleOutlined/>,
  PlusOutlined:<PlusOutlined />,
  PlusSquareOutlined:<PlusSquareOutlined />
};
export default {
  title: "ModalMember",
  component: ModalMember,
  argTypes: {
    icon: {
      options: [undefined, ...Object.keys(iconsMap)],
      mapping: {
        undefined,
        ...iconsMap,
      },
    },
  },
};

const ModalMemeberComponent = (args) => <ModalMember {...args} />;

export const ModalMemberLabels = ModalMemeberComponent.bind({});
ModalMemberLabels.args = {
  label1: "S",
  label2: "P",
  label3: "D",
  icon:iconsMap.PlusCircle
};
