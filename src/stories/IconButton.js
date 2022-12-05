import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './button.css';
// // import { DoubleCheck } from "monday-ui-react-core/icons";

// /**
//  * Primary UI component for user interaction
//  */
// export const IconButton = ({ primary, backgroundColor, size, label,icons, ...props }) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//         {/* <icon iconLabel="my font awesome start icon" icon={DoubleCheck} /> */}
//       {label}
//     </button>
//   );
// };

// IconButton.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   icons:PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// IconButton.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };

export const IconButton=({icon,label})=>{
  return(
  <Button  className="costumized-icon">
  
  {icon}
  {label}
</Button>
  );
}

IconButton.propTypes = {
  label : PropTypes.string.isRequired,
  icon : PropTypes.object.isRequired
  }
  
IconButton.defaultProps = {
  label : "Members",
}
  