import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography, Button } from "antd";

import { AlignLeftOutlined } from "@ant-design/icons";
import "./PrjCardDescription.scss";
import PrjCardDescriptionForm from "../PrjCardDescriptionForm/PrjCardDescriptionForm";

const PrjCardDescription = ({
  eachBoardItem,
  selectedCardId,
  header,
  EditButtonLabel,
  CancleButtonLabel,
}) => {
  const { Title } = Typography;
  const [enableEditMode, setEnableEditMode] = useState(false);
  const [descriptionData, setDescriptionData] = useState();
  const [btndisabled, setbtndisabled] = useState(true);
  // Edit Button Method
  const descriptionEditMode = () => {
    setEnableEditMode(!enableEditMode);
    setbtndisabled(!btndisabled);
  };
  // Data From past indexedDb
  const getExistingDataFromDb = (eachBoardItem) => {
    eachBoardItem.task.forEach((element) => {
      if (element.id === selectedCardId.id) {
        if (element.description) {
          console.log("description :", element.description);
          setDescriptionData(element.description);
        }
      }
    });
  };
  useEffect(() => {
    getExistingDataFromDb(eachBoardItem);
  }, []);

  return (
    <div className="project-card-description">
      <div className="description-icon-container">
        <AlignLeftOutlined className="icon" />
      </div>
      <div className="description-content-container">
        <div className="description-header-container">
          <div className="header">
            <Title level={4}>{header}</Title>
          </div>
          {descriptionData !== "" ? (
            <Button type="text" onClick={descriptionEditMode}>
              {EditButtonLabel}
            </Button>
          ) : null}
        </div>
        {enableEditMode ? (
          <PrjCardDescriptionForm
            eachBoardItem={eachBoardItem}
            selectedCardId={selectedCardId}
            setbtndisabled={setbtndisabled}
            btndisabled={btndisabled}
            setDescriptionData={setDescriptionData}
            setEnableEditMode={setEnableEditMode}
            enableEditMode={enableEditMode}
            descriptionData={descriptionData}
            CancleButtonLabel={CancleButtonLabel}
          />
        ) : (
          <p className="description-paragraph">{descriptionData}</p>
        )}
      </div>
    </div>
  );
};

export default PrjCardDescription;

PrjCardDescription.propTypes = {
  header: PropTypes.string.isRequired,
  EditButtonLabel: PropTypes.string.isRequired,
  CancleButtonLabel: PropTypes.string.isRequired,
};
PrjCardDescription.defaultProps = {
  header: "Description",
  EditButtonLabel: "Edit",
  CancleButtonLabel: "Cancle",
};
