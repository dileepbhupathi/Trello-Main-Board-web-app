import React from 'react';
// import "../RightPopup/RightPopup.scss";
import "../components/RightPopup/RightPopup.scss"
import PropTypes from 'prop-types';


export const LabelListItem = ({LabelColorName,backgroundColor,innerBackgroundColor}) => {
  // console.log();
  return (
    <div
    style={ backgroundColor && {backgroundColor} }
    className="labels-list-item-checkbox-left-container"
    >
    <div
      style={backgroundColor && { innerBackgroundColor }}
      className="labels-list-item-checkbox-inner-container"
    >Hi</div>
    <p>{LabelColorName}</p>
  </div>
  );
}
LabelListItem.propTypes = {
  LabelColorName : PropTypes.string.isRequired,
  backgroundColor:PropTypes.string,
  innerBackgroundColor:PropTypes.string,
  // icon : PropTypes.object.isRequired
  }
LabelListItem.defaultProps = {
  LabelColorName : "ColorName",
  backgroundColor:null,
  innerBackgroundColor:null,
}