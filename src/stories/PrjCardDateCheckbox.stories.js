import React from 'react';
import PrjCardDateCheckbox from '../components/projectCardInformation/PrjCardDateCheckbox/PrjCardDateCheckbox';

  export default {
    title:"PrjCardDateCheckbox",
    component:PrjCardDateCheckbox,
  }

const PrjCardDateCheckboxComponent = (args) => <PrjCardDateCheckbox {...args}/>
  export const PrjCardDateCheckboxheaders = PrjCardDateCheckboxComponent.bind({});
  PrjCardDateCheckboxheaders.args = {
    header:'Due Date '
  }