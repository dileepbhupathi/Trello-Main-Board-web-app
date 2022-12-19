import "./PrjCardCheckHover.scss";
import PropTypes from "prop-types";

import { BiTimeFive } from "react-icons/bi";
import { IoIosPersonAdd } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Space } from "antd";
const PrjCardCheckHover = ({ smileIcon, icon, clockIcon }) => {
  return (
    <>
      <div className="prj-hover-actions-container">
        <Space className="hider">
          <span className="hide-icon">{smileIcon}</span>
          <span className="hide-icon">{icon}</span>
          <span className="hide-icon">{clockIcon}</span>
        </Space>
      </div>
    </>
  );
};

export default PrjCardCheckHover;
PrjCardCheckHover.propTypes = {
  icon: PropTypes.object.isRequired,
  smileIcon: PropTypes.object.isRequired,
  clockIcon: PropTypes.object.isRequired,
};

PrjCardCheckHover.defaultProps = {
  icon: <IoIosPersonAdd />,
  smileIcon: <BiTimeFive />,
  clockIcon: <BiDotsHorizontalRounded />,
};
