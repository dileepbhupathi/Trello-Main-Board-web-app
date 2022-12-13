// import React from 'react';

// import { IconButton } from './IconButton';

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: 'Example/IconButton',
//   component: IconButton,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => <IconButton {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

// import React from "react";
// import {
//   TagOutlined,
//   UserOutlined,
//   PicCenterOutlined,
//   CloseOutlined,
// } from "@ant-design/icons";
// import { IconButton } from "./IconButton";

// const iconsMap = {
//   PicCenterOutlined: <PicCenterOutlined />,
// TagOutlined: <TagOutlined />,
// UserOutlined: <UserOutlined />,
//  CloseOutline: <CloseOutlined />,
// };

// export default {
//   title: "IconButton",
//   component: IconButton,
//   argTypes: {
//   icon: {
//   options: [undefined,...Object.keys(iconsMap)],
//    mapping: {
//    undefined,
//   ...iconsMap,
//    },
//   },
//    },
// };

//  const Icon = (args) => <IconButton {...args} />;

// export const IconButtonComp = Icon.bind({});
// IconButtonComp.args = {
//  label: "Members",
//  icon: "",
// };


