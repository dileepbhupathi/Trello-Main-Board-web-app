import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PrjCardDateCheckbox.scss";
import { Checkbox, Typography } from "antd";
import PrjCardDate from "../PrjCardDate/PrjCardDate";

const PrjCardDateCheckbox = ({ header, selectedCardId, eachBoardItem }) => {
  const { Title } = Typography;
  const [dateChecked, setDateChecked] = useState(false);
  const onChangeDateCheckBox = (e) => {
    if (e.target.checked) {
      setDateChecked(true);
    } else {
      setDateChecked(false);
    }
  };
  return (
    <>
      <div className="project-date-checkbox-section">
        <Title level={5} className="blur-header" type="secondary">
          {header}
        </Title>
        <Checkbox
          onChange={onChangeDateCheckBox}
          className="project-date-checkbox"
        >
          <PrjCardDate
            dateChecked={dateChecked}
            selectedCardId={selectedCardId}
            eachBoardItem={eachBoardItem}
          />
        </Checkbox>
      </div>
    </>
  );
};

export default PrjCardDateCheckbox;
PrjCardDateCheckbox.propTypes = {
  header: PropTypes.string.isRequired,
};
PrjCardDateCheckbox.defaultProps = {
  header: "Due date",
};
