
import React from "react";
import ModalMember from "../components/ModalMember/ModalMember";

export default { 
    title:'ModalMember',
    component:ModalMember
}

export function Default(args){
    return <ModalMember {...args} />
}
Default.args = {
    children:"Heading (Default)"
}
// export const ModalMemberComponent = () => <ModalMember/>