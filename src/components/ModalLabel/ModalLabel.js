import "./ModalLabel.scss";
import PropTypes from "prop-types";
import { Typography } from "antd";
const ModalLabel = ({label}) => {
  const {Title} =Typography;
  return (
    <>
      <Title level={5} type="secondary">{label}</Title>
    </>
  );
};

export default ModalLabel;
ModalLabel.propTypes = {
  label:PropTypes.string.isRequired
}
ModalLabel.defaultProps = {
  label:"Labels"
}