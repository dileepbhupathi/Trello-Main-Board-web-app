
import React, { useState } from "react";
import "../../components/RightPopup/RightPopup.scss";

import { Popover, Button, Checkbox, Input, Select } from "antd";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { FieldTimeOutlined } from "@ant-design/icons";
// import PropTypes from "prop-types";

export const Dates = () => {
//   const [date, setDate] = useState(new Date());

let startDate = "M/D/YYYY";
let dueDate = "M/D/YYYY";
let time = "h:mm A";
  const [startingDate, setStartingDate] = useState(new Date());
  var today = moment();
  var tomorrow = moment(today).add(1, 'days');
  const [endDate, setEndDate] = useState(tomorrow);

  const [isstartDateChecked, setIsstartDateChecked] = useState(false);

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const [isDueDateChecked, setIsDueDateChecked] = useState(false);


  const onChangeCalendar
   = (dates) => {
    const [start, end] = dates;
    setStartingDate(start);
    setEndDate(end);
  };

  if (isstartDateChecked) {
    startDate = moment(startingDate).format("MM/DD/YYYY");
  }

  if (isDueDateChecked) {
    dueDate = moment(endDate).format("MM/DD/YYYY");
    time = moment().format("h:mm A");
  };
  const dates = (
    <div className="right-top-popover-container">
      <hr />
      <Calendar onChange={onChangeCalendar} selected={startingDate} startDate={startingDate} endDate={endDate} selectRange/>
      <br />
      <label>Start date</label>
      <br />
      <Checkbox onChange={(e) => setIsstartDateChecked(e.target.checked)}>
        <Input
          disabled={!isstartDateChecked}
          placeholder="M/D/YYYY"
          value={startDate}
          className="start-date"
        ></Input>
      </Checkbox>
      <br />
      <label>Due date</label>
      <Checkbox onChange={(e) => setIsDueDateChecked(e.target.checked)}>
        <Input
          className="due-date"
          disabled={!isDueDateChecked}
          value={dueDate}
        ></Input>
        <Input
          className="due-date-time"
          disabled={!isDueDateChecked}
          value={time}
        ></Input>
      </Checkbox>
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
      <p>Reminders will be sent ti all members and watchers of this card.</p>
      <Button className="right-popup-bottom-btn" type="primary">
        Save
      </Button>
      <Button className="right-popup-bottom-btn">Remove</Button>
    </div>
  );

  return (
    <Popover content={dates} trigger="click" title="Dates">
      <Button className="right-container-button">
        <FieldTimeOutlined />
        Dates
      </Button>
    </Popover>
  );
};
// Dates.propTypes = {
//   label: PropTypes.string.isRequired,
//   // icon : PropTypes.object.isRequired
// };

// Dates.defaultProps = {
//   label: "Dates",
// };
