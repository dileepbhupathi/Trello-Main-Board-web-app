import React from 'react';
import "../RightPopup/RightPopup.scss";
import PropTypes from 'prop-types';


export const LabelListItem = ({item}) => {
  console.log();
  return (
    <div
    style={{ backgroundColor: item.bgColor }}
    className="labels-list-item-checkbox-left-container"
    >
    <div
      style={{ backgroundColor: item.cardBgColor }}
      className="labels-list-item-checkbox-inner-container"
    ></div>
    <p>{item.name}</p>
  </div>
  );
}
LabelListItem.propTypes = {
  LabelColorName : PropTypes.string.isRequired
  // icon : PropTypes.object.isRequired
  }
LabelListItem.defaultProps = {
  LabelColorName : "LabelsColorName",
}