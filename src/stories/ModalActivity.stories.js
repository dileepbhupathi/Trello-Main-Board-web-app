import React from "react";
import ModalActivity from "../components/ModalActivity/ModalActivity";
import {RiBearSmileLine} from 'react-icons/ri';
import {CgSmileMouthOpen} from 'react-icons/cg';
import {TfiCommentsSmiley} from 'react-icons/tfi';

const smileIconMap = {
  RiBearSmileLine:<RiBearSmileLine/>,
  CgSmileMouthOpen:<CgSmileMouthOpen/>,
  TfiCommentsSmiley:<TfiCommentsSmiley/>
};
export default {
  title: "ModalActivity",
  component: ModalActivity,
  argTypes: {
    smileIcon: {
      options: [undefined, ...Object.keys(smileIconMap)],
      mapping: {
        undefined,
        ...smileIconMap,
      },
    },
  },
};

const ModalActivityComponent = (args) => <ModalActivity {...args} />;

export const ModalActivityLabels = ModalActivityComponent.bind({});
ModalActivityLabels.args = {
  label: "Activity",
  smileIcon:smileIconMap.RiBearSmileLine
};
