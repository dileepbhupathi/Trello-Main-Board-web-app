import React from 'react';
import PrjCardHeaderTitle from '../components/projectCardInformation/PrjCardHeaderTitle/PrjCardHeaderTitle';
import {
    PlusOutlined,
    PlusCircleOutlined,
    PlusSquareOutlined,
    PicCenterOutlined
  } from "@ant-design/icons";
  const iconsMap = {
    PicCenterOutlined:<PicCenterOutlined/>,
    PlusCircle:<PlusCircleOutlined/>,
    PlusOutlined:<PlusOutlined />,
    PlusSquareOutlined:<PlusSquareOutlined />
  };
  export default {
    title:"PrjCardHeaderTitle",
    component:PrjCardHeaderTitle,
    argTypes: {
        icon: {
          options: [undefined, ...Object.keys(iconsMap)],
          mapping: {
            undefined,
            ...iconsMap,
          },
        },
      },
  }

const PrjCardHeaderTitleComponent = (args) => <PrjCardHeaderTitle {...args}/>
  export const PrjCardTitleHeader= PrjCardHeaderTitleComponent.bind({});
  PrjCardTitleHeader.args = {
    icon:iconsMap.PlusCircle
    
  }