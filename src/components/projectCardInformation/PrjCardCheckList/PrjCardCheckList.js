import "./PrjCardCheckList.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import { CheckSquareOutlined } from "@ant-design/icons";
import { Typography, Button } from "antd";
import PrjCardDeleteCheck from "../PrjCardDeleteCheck/PrjCardDeleteCheck";

import PrjCardProgress from "../PrjCardProgress/PrjCardProgress";
import PrjCardCheckboxList from "../PrjCardCheckboxList/PrjCardCheckboxList";
import PrjCardCheckForm from "../PrjCardCheckForm/PrjCardCheckForm";
import PrjCardHideChecklist from "../PrjCardHideChecklist/PrjCardHideChecklist";
const PrjCardCheckList = ({ header }) => {
  const { Title } = Typography;
  const [showForm, setShowForm] = useState(false);
  const [hideAddButton, setHideAddButton] = useState(false);
  const [newCheckboxdata, setNewCheckboxData] = useState([]);
  const [percent, setPercent] = useState(newCheckboxdata.length);
  const [showChecklistData, setShowChecklistData] = useState(false);
  const [hide, setHide] = useState(false);
  const [fullData, setFullData] = useState([]);
  const [check, setCheck] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
    setHideAddButton(true);
    setShowChecklistData(true);
  };
  const getNewCheckboxData = (data) => {
    console.log("Entire Checkbox data: ", data);
    setNewCheckboxData(data);
  };
  const getPercentValue = (data) => {
    let boxcheckedData = [];
    data.forEach((element) => {
      if (element.checkStatus === "checked") {
        boxcheckedData.push(element);
      }
    });
    let percentageCalculation =
      (boxcheckedData.length / newCheckboxdata.length) * 100;
    setPercent(percentageCalculation);
  };

  const hideCheckedItemsHandler = () => {
    setFullData(newCheckboxdata);
    let dataTofilter = newCheckboxdata;
    console.log('checklist hidden')
    const filteredData = dataTofilter.filter((item) => {
      return item.checkStatus === "unchecked";
    });
    setNewCheckboxData(filteredData);
    setCheck(!check);
    setHide(!hide);
  };
  const showCheckedItemsHandler = () => {
    setHide(!hide);
    console.log('checklist showing')
    console.log(newCheckboxdata);
    setNewCheckboxData(fullData);
    setCheck(!check);
  };
  return (
    <>
      <div className="project-card-checkbox-container">
        <div className="checkbox-icon-container">
          <CheckSquareOutlined className="icon" />
        </div>
        <div className="checkbox-content-section">
          <div className='header'>
            <Title level={4} >{header}</Title>
          </div>
          <div className="prj-hide-show-delete-container">
            <PrjCardHideChecklist
              check={check}
              hide={hide}
              newCheckboxdata={newCheckboxdata}
              showCheckedItemsHandler={showCheckedItemsHandler}
              hideCheckedItemsHandler={hideCheckedItemsHandler}
            />
            <PrjCardDeleteCheck
              setPercent={setPercent}
              setNewCheckboxData={setNewCheckboxData}
            />
          </div>
        </div>
      </div>
      {newCheckboxdata.length > 0 ? (<PrjCardProgress percent={percent} />) : null}
      
      {showChecklistData === true ? (
        <div>
          <PrjCardCheckboxList
            newCheckboxdata={newCheckboxdata}
            getPercentValue={getPercentValue}
          />
        </div>
      ) : null}

      {hideAddButton === true ? null : (
        <Button onClick={showFormHandler} className="AddChecklistButton">
          Add an Item
        </Button>
      )}

      {showForm === true ? (
        <div>
          <PrjCardCheckForm
            setShowForm={setShowForm}
            setHideAddButton={setHideAddButton}
            getNewCheckboxData={getNewCheckboxData}
          />
        </div>
      ) : null}
    </>
  );
};

export default PrjCardCheckList;

PrjCardCheckList.propTypes = {
  header: PropTypes.string.isRequired,
  // DeleteButtonLabel: PropTypes.string.isRequired,
  // AddCheckLabel: PropTypes.string.isRequired,
};
PrjCardCheckList.defaultProps = {
  header: "Checkbox",
  // DeleteButtonLabel: "Delete",
  // AddCheckLabel: "Add an item",
};
