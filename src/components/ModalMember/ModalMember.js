import "./ModalMember.scss";
import { Space, Typography } from "antd";
import {AiFillPlusCircle} from 'react-icons/ai';
const ModalMember = () => {
  const { Text } = Typography;
  return (
    <>
      <Space align="top" direction="vertical">
        <Text type="secondary">Members</Text>
        <Space>
          <div className="member">P</div>
          <div className="member">S</div>
          <div className="member">D</div>
          <AiFillPlusCircle className="member-add-icon" />
        </Space>
      </Space>
    </>
  );
};

export default ModalMember;
