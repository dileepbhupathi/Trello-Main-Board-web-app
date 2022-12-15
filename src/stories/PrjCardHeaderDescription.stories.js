import React from 'react';
import PrjCardHeaderDescription from '../components/projectCardInformation/PrjCardHeaderDescription/PrjCardHeaderDescription';

  export default {
    title:"PrjCardHeaderDescription",
    component:PrjCardHeaderDescription,
  }

const PrjCardHeaderDescriptionComponent = (args) => <PrjCardHeaderDescription {...args}/>
  export const PrjCardHeaderDescriptionLabels = PrjCardHeaderDescriptionComponent.bind({});
  PrjCardHeaderDescriptionLabels.args = {
    header:'in list '
  }