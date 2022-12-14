import React from 'react';
import PrjCardMember from '../components/projectCardInformation/PrjCardMember/PrjCardMember';
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
    title:"PrjCardMember",
    component:PrjCardMember,
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

const PrjCardMemberComponent = (args) => <PrjCardMember {...args}/>
  export const PrjCardMemberLabels = PrjCardMemberComponent.bind({});
  PrjCardMemberLabels.args = {
    icon:iconsMap.PlusCircle,
    header:'Members'
  }