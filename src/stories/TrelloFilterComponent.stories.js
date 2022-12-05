import React from "react";

import { FilterComponent } from "../components/NavbarFilter/Filter";
import {AiFillFilter} from 'react-icons/ai'
import {FcFilledFilter} from 'react-icons/fc'
import {FaFilter} from 'react-icons/fa'
import {BsFilterLeft} from 'react-icons/bs'
import {MdFilterHdr,MdOutlineFilter} from 'react-icons/md'
import {IoColorFilterOutline} from 'react-icons/io5'


const iconsMap = {
  Filter : <BsFilterLeft/>,
  Filter1: <AiFillFilter />,
  Filter2: <FcFilledFilter />,
  Filter3: <FaFilter />,
  Filter4: <MdFilterHdr />,
  Filter5 : <IoColorFilterOutline/>,
  Filter6 : <MdOutlineFilter/>
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
  icon: <BsFilterLeft />,
};
