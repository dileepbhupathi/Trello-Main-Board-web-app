import "./PrjCardActivityForm.scss";
import React from "react";
import { Form, Input, Button } from "antd";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { FaRegAddressCard } from "react-icons/fa";
import { v4 as uuid } from "uuid";
const moment = require("moment-timezone");

const PrjCardActivityForm = ({ getNewActivity,allActivityData }) => {
  const [activityForm] = Form.useForm();
  
  const activitySubmitHandler = (e) => {
    let now = moment(new Date());
    let timestamps = now.tz("Asia/Kolkata").format("hh:mm A");
    const newactivitydata = [...allActivityData];
    newactivitydata.push({
      id: uuid().slice(0, 3),
      activity: e.activityInputData,
      timestamps: String(timestamps),
    });
    getNewActivity(newactivitydata);
    activityForm.resetFields();
    
  };
  return (
    <div className="project-activity-form">
      <div className="activity-icon-container">
        <div className="member">s</div>
      </div>
      <Form className="activity-form-section" form={activityForm} onFinish={(e) => activitySubmitHandler(e)}>
        <Form.Item name="activityInputData">
          <Input placeholder="Write a comment..." />
        </Form.Item>
        <Form.Item>
          <div className="activity-submit-section">
            <div>
              <Button type="primary" className="btn-primary" htmlType="submit">
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
  );
};

export default PrjCardActivityForm;
