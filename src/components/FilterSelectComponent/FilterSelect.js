import { Select } from "antd";
import React from "react";
import {Typography} from 'antd'

export const FilterSelect = () => {

  const { Text } = Typography;


    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

  return (
    <>
      <Select
        defaultValue="Any match"
        style={{
          width: 470,
        }}
        onChange={handleChange}
      >
        <Select.Option value="Any Match">
          <Text className="select-options-list">Any Match</Text>
          <Text>Matches any label and any memeber</Text>
        </Select.Option>
        <Select.Option value="Exact Match">
          <Text className="select-options-list">Exact Match</Text>
          <Text>Matches any label and any memeber</Text>
        </Select.Option>
      </Select>
    </>
  );
};
