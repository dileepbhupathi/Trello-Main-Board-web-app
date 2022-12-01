import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { FaRegAddressCard } from "react-icons/fa";
import PropTypes from "prop-types";
import moment from "moment";
import { v4 as uuid } from "uuid";
import "./ModalActivity.scss";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Space, Typography, Button, Form, Input, List } from "antd";
const ModalActivity = ({ label }) => {
  const { Title, Text } = Typography;
  const [activityForm] = Form.useForm();
  const [activity, setActivity] = useState(false);
  const [activityData, setActivityData] = useState([]);
  const activitySubmitHandler = (e) => {
    let now = moment(new Date());
    let timestamps = now.tz("Asia/Kolkata").format("hh:mm A");
    const newactivitydata = [...activityData];
    newactivitydata.push({
      id: uuid().slice(0, 3),
      activity: e.activityInputData,
      timestamps: String(timestamps),
    });
    setActivityData(newactivitydata);
    activityForm.resetFields();
    setActivity(true);
  };
  const deleteActivityStatus = (item) => {
    let id = item.id;
    activityData.forEach((i) => {
      if (i.id === id) {
        setActivityData(activityData.filter((activity) => activity.id !== id));
        // console.log("activity deleted succesful");
      } else {
        console.log("no such id found");
      }
    });
  };
  return (
    <div className="activity">
      <div className="activity-container">
        <div className="activity-icon-container">
          <UnorderedListOutlined style={{ fontSize: "30px" }} />
        </div>
        <Space direction="vertical">
          <Space className="activity-title-container">
            <Title level={4}>{label}</Title>
            <Button
              type="text"
              onClick={() => {
                setActivity(!activity);
              }}
            >
              {" "}
              {activity ? "Hide details" : "Show details"}
            </Button>
          </Space>
        </Space>
      </div>
      <div className="activity-input-section">
        <div className="activity-icon-container">
          <div className="member">s</div>
        </div>
        <Form form={activityForm} onFinish={(e) => activitySubmitHandler(e)}>
          <Form.Item name="activityInputData">
            <Input
              placeholder="Write a comment..."
              style={{ borderRadius: "0px" }}
            />
          </Form.Item>
          <Form.Item>
            <div className="activity-submit-section">
              <div>
                <Button
                  type="primary"
                  className="btn-primary"
                  htmlType="submit"
                >
                  Save
                </Button>
              </div>
              <div>
                <Button type="text">
                  <GrAttachment />
                </Button>
                <Button type="text">@</Button>
                <Button type="text">
                  <BsEmojiSmile />
                </Button>
                <Button type="text">
                  <FaRegAddressCard />
                </Button>
              </div>
            </div>
          </Form.Item>
        </Form>
      </div>

      {activity ? (
        <List
          className="activity-list"
          dataSource={activityData}
          renderItem={(item) => (
            <List.Item className="activity-status">
              <div className="activity-icon-container">
                <div className="member">s</div>
              </div>

              <div className="activity-status-content">
                <Text level={5}>spandala</Text>
                <Text type="secondary" level={5}>
                  {" "}
                  today at {item.timestamps}
                </Text>
                <br />
                <Text type="secondary" level={5}>
                  {item.activity}
                </Text>
                <div className="activity-status-options-section">
                  <BsEmojiSmile className="activity-status-options-icons" />
                  <Text type="secondary"> - Edit - </Text>
                  <Text
                    type="secondary"
                    onClick={() => {
                      deleteActivityStatus(item);
                    }}
                  >
                    Delete
                  </Text>
                </div>
              </div>
            </List.Item>
          )}
        />
      ) : null}
    </div>
  );
};

export default ModalActivity;

ModalActivity.propTypes = {
  label: PropTypes.string.isRequired,
};
ModalActivity.defaultProps = {
  label: "Activity",
};
