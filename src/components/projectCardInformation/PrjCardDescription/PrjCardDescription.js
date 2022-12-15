import React, { useState } from "react";
import PropTypes from "prop-types";
import {Typography, Button } from "antd";

import { AlignLeftOutlined } from "@ant-design/icons";
import "./PrjCardDescription.scss";
import PrjCardDescriptionForm from "../PrjCardDescriptionForm/PrjCardDescriptionForm";

const PrjCardDescription = ({
  projectCardDescription,
  header,
  EditButtonLabel,
  CancleButtonLabel,
}) => {
  const [enableEditMode, setEnableEditMode] = useState(false);
  const [descriptionData, setDescriptionData] = useState(
    projectCardDescription
  );
  const [btndisabled, setbtndisabled] = useState(true);

  const descriptionEditMode = () => {
    setEnableEditMode(!enableEditMode);
    setbtndisabled(!btndisabled);
  };
  const { Title } = Typography;
  return (
    <div className="project-card-description">
      <div className="description-icon-container">
        <AlignLeftOutlined className='icon' />
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
          <p className="description-paragraph">{descriptionData}</p>
        ) : (
          <PrjCardDescriptionForm
            setbtndisabled={setbtndisabled}
            btndisabled={btndisabled}
            setDescriptionData={setDescriptionData}
            setEnableEditMode={setEnableEditMode}
            enableEditMode={enableEditMode}
            descriptionData={descriptionData}
            CancleButtonLabel={CancleButtonLabel}
          />
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
