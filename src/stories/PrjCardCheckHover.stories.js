import React from "react";
import PrjCardCheckHover from "../components/projectCardInformation/PrjCardCheckHover/PrjCardCheckHover";
import {
  PlusOutlined,
  PlusCircleOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
const iconsMap = {
  smileIcon: <PlusCircleOutlined />,
  iconclockIcon: <PlusOutlined />,
  PlusSquareOutlined: <PlusSquareOutlined />,
};
export default {
  title: "PrjCardCheckHover",
  component: PrjCardCheckHover,
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

const PrjCardCheckHoverComponent = (args) => <PrjCardCheckHover {...args} />;

export const PrjCardCheckHoverLabels = PrjCardCheckHoverComponent.bind({});
PrjCardCheckHoverLabels.args = {
  smileIcon: iconsMap.smileIcon,
  icon: iconsMap.icon,
  clockIcon: iconsMap.clockIcon,
};
