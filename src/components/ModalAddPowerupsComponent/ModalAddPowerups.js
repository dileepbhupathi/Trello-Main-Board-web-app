import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { Button,Typography} from "antd";


export const ModalAddPowerups = () => {

  const { Text } = Typography;

  return (
    <div>
        <Text className="power-ups-title">Power-Ups</Text>
        <div>
          <Button className="add-power-ups-button">
            <AiOutlinePlus className="button-list-icons" />
            Add Power-Ups
          </Button>
        </div>
      </div>
  )
}
