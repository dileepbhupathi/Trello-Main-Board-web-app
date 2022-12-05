import React from "react";

import { FilterComponent } from "../components/NavbarFilter/Filter";

import {
  StepForwardOutlined,
  FastForwardOutlined,
  FilterOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const iconsMap = {
  Filter: <FilterOutlined />,
  StepForward: <StepForwardOutlined />,
  FastForward: <FastForwardOutlined />,
  CloseOutline: <CloseOutlined />
};

export default {
  title: "Trello Filter",
  component: FilterComponent,
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

export const Filter = (args) => <FilterComponent {...args} />;

export const filterButtonComponent = Filter.bind({});
filterButtonComponent.args = {
  label: "Filter",
  icon: <FilterOutlined />,
};
