import "./PrjCardCheckbox.scss";
import React from "react";
import { Checkbox, Typography } from "antd";
import PrjCardCheckHover from "../PrjCardCheckHover/PrjCardCheckHover";
const PrjCardCheckbox = ({
  checkboxData,
  getPercentValue,
  newCheckboxdata,
}) => {
  const {Text} = Typography;
  const onChangeCheck = (checkboxData, e) => {
    if (e.target.checked) {
      checkboxData["checkStatus"] = "checked";
      getPercentValue(newCheckboxdata);
      console.log('checkbox checked')
    } else {
      checkboxData["checkStatus"] = "unchecked";
      getPercentValue(newCheckboxdata);
      console.log('checkbox unchecked')
    }
  };

  return (
    <div className="project-card-checkbox">
      <Checkbox
      className="checkbox-item"
        onChange={(e) => {
          onChangeCheck(checkboxData, e);
        }}
        defaultChecked={checkboxData.checkStatus === "checked" ? true : false}
      >
        <div className="checkbox-inner-container">
          <div className={
          checkboxData.checkStatus === "checked"
            ? "overlinestyle"
            : "disableoverline"
        }>
            <Text type="secondary">{checkboxData.checkItem}</Text>
          </div>
          <div className="checkbox-actions-container">
            <PrjCardCheckHover />
          </div>
        </div>
      </Checkbox>
    </div>
  );
};

export default PrjCardCheckbox;
