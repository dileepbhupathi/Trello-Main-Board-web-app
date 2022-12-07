import { Button } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { BsFilterLeft } from "react-icons/bs";
import "./IconButton.scss";

export const IconButton = ({ label, icon }) => {
  return (
    <div>
      <Button type="primary" size="large">
        <span className="button-icon-container">{icon}</span>
        {label}
      </Button>
    </div>
  );
};

IconButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

IconButton.defaultProps = {
  label: "Icon Button",
  icon: <BsFilterLeft />,
};
