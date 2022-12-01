import "./ModalDate.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";

import { Checkbox, Typography, DatePicker } from "antd";
import dayjs from "dayjs";
import moment from "moment-timezone";
const ModalDate = ({label}) => {
  const { Title } = Typography;
  const [dateChecked, setDateChecked] = useState(false);
  const [duration, setDuration] = useState();
  const [timeLeft, setTimeLeft] = useState(0);


  const onChangeDateCheckBox = (e) => {
    if (e.target.checked) {
      setDateChecked(true);
    } else {
      setDateChecked(false);
    }
  };

  function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc1 - utc2) / _MS_PER_DAY);
  }

  
  const onChangeDatePicker = (date, dateString) => {
    setDuration(date, dateString);
    let a = new Date(moment(dateString)._i);
    let b = new Date(moment(new Date()).format("YYYY-MM-DD"));
    const difference = dateDiffInDays(a, b);
    setTimeLeft(difference);
  };


  return (
    <>
      <div className="date-section">
        <Title level={5} type="secondary">{label}</Title>
        <Checkbox onChange={onChangeDateCheckBox}>
          <DatePicker onChange={onChangeDatePicker}>
            {dayjs(duration)}
          </DatePicker>
          <span>
            {duration ? (
              dateChecked === false ? (
                timeLeft !== 0 ? (
                  timeLeft > 0 && timeLeft < 5 ? (
                    <span className="warning">due soon</span>
                  ) : (
                    <span className="danger">over due</span>
                  )
                ) : null
              ) : (
                <span className="success">completed</span>
              )
            ) : null}
          </span>
        </Checkbox>
      </div>
    </>
  );
};

export default ModalDate;
ModalDate.propTypes = {
  label: PropTypes.string.isRequired,
};
ModalDate.defaultProps = {
  label:'Due date'
};