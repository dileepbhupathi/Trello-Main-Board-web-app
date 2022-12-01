import React from 'react'

import {FilterComponent} from '../components/NavbarFilter/Filter'

export default {
    title : 'Trello Filter',
    component : FilterComponent,
}

export const Filter = (args) => <FilterComponent {...args}/>

export const filterButtonComponent = Filter.bind({});
filterButtonComponent.args = {
    label : "Filter",
    icon : 'FaCcDiscover',
}