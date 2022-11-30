import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { FaRegAddressCard } from "react-icons/fa";
import moment from "moment";
import { v4 as uuid } from "uuid";
import "./ModalActivity.scss";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Space, Typography, Button, Form, Input, List } from "antd";
const ModalActivity = () => {
  const { Title } = Typography;
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
    <>
      <section className="activity-container">
        <section className="activity-icon-container">
          <UnorderedListOutlined style={{ fontSize: "30px" }} />
        </section>
        <Space direction="vertical">
          <Space className="activity-title-container">
            <Title level={4}>Activity</Title>
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
      </section>

      <section className="activity-input-section">
        <section className="member">sp</section>

        <Form form={activityForm} onFinish={(e) => activitySubmitHandler(e)}>
          <Form.Item name="activityInputData">
            <Input
              placeholder="Write a comment..."
              style={{ borderRadius: "0px" }}
            />
          </Form.Item>
          <Form.Item>
            <section className="activity-submit-section">
              <section>
                <Button
                  type="primary"
                  className="btn-primary"
                  htmlType="submit"
                >
                  Save
                </Button>
              </section>
              <section>
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
              </section>
            </section>
          </Form.Item>
        </Form>
      </section>

      {activity ? (
        <List
          dataSource={activityData}
          renderItem={(item) => (
            <List.Item className="activity-status">
              <section className="member">s</section>
              <section className="activity-status-content">
                <p>spandala today at {item.timestamps}</p>
                <div className="activity-status-matter">{item.activity}</div>
                <div className="activity-status-options-section">
                  <BsEmojiSmile className="activity-status-options-icons" />
                  <p>Edit </p>
                  <p
                    onClick={() => {
                      deleteActivityStatus(item);
                    }}
                  >
                    Delete
                  </p>
                </div>
              </section>
            </List.Item>
          )}
        />
      ) : null}
    </>
  );
};

export default ModalActivity;
