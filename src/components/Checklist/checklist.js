import React from 'react';
import { Button, Popover, Input,Select } from 'antd';
import {CheckSquareOutlined} from "@ant-design/icons";

export const Checklist = () => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      const onSearch = (value) => {
        console.log("search:", value);
      };
    const checkList=(
        <div  className="right-top-popover-container">
        <hr />
              <label>Title</label>
              <Input></Input>
              <label>Copy items from...</label>
              <Select
                style={{ width: "250px" }}
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
        /></div>
      );
  return (
    <Popover content={checkList} trigger="click" title="Check List">
      <Button className="right-container-button">
        <CheckSquareOutlined />
        Checklist
      </Button>
      </Popover>
  )
}
