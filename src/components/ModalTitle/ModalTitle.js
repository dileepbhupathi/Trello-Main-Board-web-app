import "./ModalTitle.scss";
import ModalMember from "../../components/ModalMember/ModalMember";
import PropTypes from "prop-types";

import { Space, Typography } from "antd";
import { PicCenterOutlined } from "@ant-design/icons";
import ModalDate from "../ModalDate/ModalDate";
import ModalLabel from "../ModalLabel/ModalLabel";

const ModalTitle = ({ modaltitle, modaldescription,label}) => {
  const { Title, Text, Link } = Typography;
  return (
    <Space align="top" direction="horizontal">
      <PicCenterOutlined style={{ fontSize: "30px" }} />
      <Space direction="vertical">
        <Space direction="vertical" className="space">
          <Title level={3}>{modaltitle}</Title>
          <Text type="secondary">
            {label}{" "}
            <Link href="/" target="/">
              <Text type="secondary" underline>{modaldescription}</Text>
            </Link>
          </Text>
        </Space>
        <Space>
          <ModalMember />
          <ModalLabel/>
        </Space>
        <Space direction="vertical">
          <ModalDate />
        </Space>
      </Space>
    </Space>
  );
};

export default ModalTitle;
ModalTitle.propTypes = {
  label: PropTypes.string.isRequired,

};

ModalTitle.defaultProps = {
  label: "in list "
};