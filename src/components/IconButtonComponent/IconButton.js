import { Button } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { BsFilterLeft } from "react-icons/bs";
import "./IconButton.scss";

export const IconButton = ({ ButtonContext, icon }) => {
  return (
    <div>
      <Button type="primary" size="large">
        <span className="button-icon-container">{icon}</span>
        {ButtonContext}
      </Button>
    </div>
  );
};

IconButton.propTypes = {
  ButtonContext: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

IconButton.defaultProps = {
  ButtonContext: "Icon Button",
  icon: <BsFilterLeft />,
};
