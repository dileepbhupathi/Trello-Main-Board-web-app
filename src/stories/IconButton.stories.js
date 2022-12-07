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
      options: [undefined, ...Object.keys(iconsMap)],
      mapping: {
        undefined,
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
