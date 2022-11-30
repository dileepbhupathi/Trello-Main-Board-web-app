import "./ModalTitle.scss";
import ModalMember from "../../components/ModalMember/ModalMember";

import { Space, Typography } from "antd";
import { PicCenterOutlined } from "@ant-design/icons";
import ModalDate from "../ModalDate/ModalDate";
import ModalLabel from "../ModalLabel/ModalLabel";

const ModalTitle = ({ modaltitle, modaldescription }) => {
  const { Title, Text, Link } = Typography;
  return (
    <Space align="top" direction="horizontal">
      <PicCenterOutlined style={{ fontSize: "30px" }} />
      <Space direction="vertical">
        <Space direction="vertical" className="space">
          <Title level={3}>{modaltitle}</Title>
          <Text type="secondary">
            in list{" "}
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
