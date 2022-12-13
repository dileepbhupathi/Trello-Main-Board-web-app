import "./ModalLabel.scss";
import React from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";
// import { Labels } from "../Labels/labels";
import { Labels } from "../../view/Labels/labels";

const ModalLabel = ({ label }) => {
  const { Title } = Typography;
  return (
    <div className="modal-label-container">
      <Title level={5} type="secondary">
        {label}
      </Title>
      <Labels />
    </div>
  );
};

export default ModalLabel;
ModalLabel.propTypes = {
  label: PropTypes.string.isRequired,
};
ModalLabel.defaultProps = {
  label: "Labels",
};
