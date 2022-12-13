<<<<<<< HEAD
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


=======
import React from "react";
import {IoMdContacts} from 'react-icons/io'
import {MdLeaderboard,MdContentCopy,MdArchive} from 'react-icons/md'
import {SlCalender} from 'react-icons/sl'
import {BsFilterLeft,BsFillPersonPlusFill,BsArrowRight,BsShare} from 'react-icons/bs'
import {IoReloadOutline,IoRocketSharp} from 'react-icons/io5'
import {ImPower} from 'react-icons/im'
import { IconButton } from "../components/IconButtonComponent/IconButton";
import {AiOutlinePlus,AiOutlineEye,AiOutlineMinus} from 'react-icons/ai'
import {CgTemplate} from 'react-icons/cg'

const iconsMap = {
  BsFilterLeft : <BsFilterLeft/>,
  IoMdContacts: <IoMdContacts />,
  MdLeaderboard: <MdLeaderboard />,
  SlCalender: <SlCalender />,
  IoRocketSharp: <IoRocketSharp />,
  ImPower : <ImPower/>,
  BsFillPersonPlusFill : <BsFillPersonPlusFill/>,
  AiOutlinePlus : <AiOutlinePlus/>,
  BsArrowRight : <BsArrowRight/>,
  MdContentCopy : <MdContentCopy/>,
  CgTemplate : <CgTemplate/>,
  AiOutlineEye : <AiOutlineEye/>,
  MdArchive : <MdArchive/>,
  IoReloadOutline : <IoReloadOutline/>,
  AiOutlineMinus : <AiOutlineMinus/>,
  BsShare : <BsShare/>
};

export default {
  title: "Icon Button",
  component: IconButton,
  argTypes: {
    icon: {
      options: [...Object.keys(iconsMap)],
      mapping: {
        ...iconsMap,
      },
    },
  },
};

export const IconButtons = (args) => <IconButton {...args} />;

export const IconButtonComponent = IconButtons.bind({});
IconButtons.args = {
  ButtonContext: "Icon Button",
  icon: <BsFilterLeft />,
};
>>>>>>> 94182adf89eea90f17fd005aca5cbeb194ab2ae0
