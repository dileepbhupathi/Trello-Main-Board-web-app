import React, { useState } from 'react';
import '../RightPopup/RightPopup.scss';
import { Popover,Button, Checkbox, Input, Select} from 'antd';
import Calendar from 'react-calendar';
import moment from "moment";
import 'react-calendar/dist/Calendar.css';
import {
    FieldTimeOutlined,
  } from "@ant-design/icons";

export const Dates = () => {
  const [date, setDate] = useState();
  const [isChecked, setIsChecked] = useState(false);
  let eachDate=moment(date).format("MM/DD/YYYY");
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      const onSearch = (value) => {
        console.log("search:", value);
      };
    const dates=(
        <div  className="right-top-popover-container">
          <hr/>
              <Calendar onChange={setDate} />
              <div className="date-picker">   
              </div>
              <br/>
              <label>Start date</label>
              <br />
              <Checkbox onChange={(e) => setIsChecked(e.target.checked)}>
                <Input disabled={!isChecked} placeholder="M/D/YYYY"  value={eachDate}></Input>
              </Checkbox>
              <br />
              <label>Set due date reminder</label>
              <Select
                style={{ width: "250px" }}
                showSearch
                // placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "None",
                    label: "None",
                  },
                  {
                    value: "At time of due date",
                    label: "At time of due date",
                  },
                  {
                    value: "5 minutes before",
                    label: "5 minutes before",
                  },
                  {
                    value: "10 minutes before",
                    label: "10 minutes before",
                  },
                  {
                    value: "15 minutes before",
                    label: "15 minutes before",
                  },
                  {
                    value: "1 Hour before",
                    label: "1 Hour before",
                  },
                  {
                    value: "2 Hours before",
                    label: "2 Hours before",
                  },
                  {
                    value: "1 Day before",
                    label: "1 Day before",
                  },
                  {
                    value: "2 Days before",
                    label: "2 Days before",
                  },
                ]}
              />
              <p>
                Reminders will be sent ti all members and watchers of this card.
              </p>
              <Button className="bottom-btn" type="primary">
                Save
              </Button>
              <Button className="bottom-btn">Remove</Button>
        </div>
      );
    
  return (
    <Popover content={dates} trigger="click" title="Dates">
    <Button className="right-container-button">
      <FieldTimeOutlined />
      Dates
    </Button>
    </Popover>  
  )
}
