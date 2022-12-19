import React, { useState } from "react";
import "./PrjCardMember.scss";
import PropTypes from "prop-types";
import { Form, Space, Typography, Input, Button, Modal, List } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
const PrjCardMember = ({ header, icon }) => {
  const [newMember, setNewMember] = useState([]);
  const [showInputModal, setShowInputModal] = useState(false);
  const [showMembersData, setShowMembersData] = useState(false);
  const AddNewMember = () => {
    setShowInputModal(!showInputModal);
  };
  const newMemberSubmitHandler = (e) => {
    if (e.membername !== " ") {
      let firstLetter = e.membername;
      firstLetter = firstLetter.charAt(0).toUpperCase();
      const newMemberData = [...newMember];
      newMemberData.push([firstLetter]);
      setNewMember(newMemberData);
      memberForm.resetFields();
      setShowInputModal(!showInputModal);
      setShowMembersData(true);
      console.log("new member added success");
    }
  };

  const { Text } = Typography;
  const [memberForm] = Form.useForm();
  return (
    <div className="Project-card-member-section">
      <Text level={5} className='blur-header' type="secondary">
        {header}
      </Text>
      <Space>
        <Space align="top">
          {showMembersData ? (
            <List
              className="member-list"
              grid={{ gutter: 5 }}
              dataSource={newMember}
              renderItem={(item) => (
                <List.Item className="member">{item}</List.Item>
              )}
            ></List>
          ) : null}

          <Space align="top" className="icon-container" onClick={AddNewMember}>
            {icon}
          </Space>
        </Space>
        <Modal
          title="Add Attachment Pop-up"
          width="300px"
          centered
          footer={null}
          open={showInputModal}
          onOk={() => setShowInputModal(false)}
          onCancel={() => setShowInputModal(false)}
        >
          <Form onFinish={newMemberSubmitHandler} form={memberForm}>
            <Form.Item name="membername">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="secondary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Space>
    </div>
  );
};

export default PrjCardMember;

PrjCardMember.propTypes = {
  icon: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
};
PrjCardMember.defaultProps = {
  icon: <PlusCircleOutlined />,
  header: "Members",
};
