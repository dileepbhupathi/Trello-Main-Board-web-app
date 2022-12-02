import "./ModalTitle.scss";
import ModalMember from "../../components/ModalMember/ModalMember";
import PropTypes from "prop-types";
import { Space, Typography } from "antd";
import { PicCenterOutlined } from "@ant-design/icons";
import ModalDate from "../ModalDate/ModalDate";
import ModalLabel from "../ModalLabel/ModalLabel";

// Let us open our database
const request = window.indexedDB.open("Database", 1);

request.onupgradeneeded = (event) => {
  const data = event.target.result;
  // below code defines the name of the object ---'description'
  const store = data.createObjectStore("description", {
    keyPath: "name",
    autoIncrement: true,
  });
//   // below code defines the name of the object ---'description'

  store.createIndex("name", "name", { value: "sandeep" }, { unique: false });
};
request.onerror = (event) => {
  console.error(`Database error: ${event.target.errorCode}`);
};
request.onsuccess = (event) => {
  console.log("Database created Succesfully");
};
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
        <div className="modal-member-label">
          <ModalMember />
          <ModalLabel/>
        </div>
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