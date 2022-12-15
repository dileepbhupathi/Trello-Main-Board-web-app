import "./PrjCardCheckForm.scss";
import React, { useState } from "react";
import { Form, Button, Space } from "antd";
import { v4 as uuid } from "uuid";
import TextArea from "antd/es/input/TextArea";

const PrjCardCheckForm = ({
  setShowForm,
  setHideAddButton,
  getNewCheckboxData,
  newCheckboxdata
}) => {
  const [checklistform] = Form.useForm();
  const [checkboxData, setCheckboxData] = useState([]);

  const checklistSubmitHandler = (e) => {
    const newCheckData = [...checkboxData];
    newCheckData.push({
      id: uuid().slice(0, 3),
      checkItem: e.checkItem,
      checkStatus: "unchecked",
    });
    checklistform.resetFields();
    setCheckboxData(newCheckData);
    getNewCheckboxData(newCheckData);
  
  };
  

  const hideFormHandler = () => {
    setShowForm(false);
    setHideAddButton(false);
  };

  return (
    <div className="project-card-checklist-form">
      <Form
        form={checklistform}
        onFinish={(e) => checklistSubmitHandler(e)}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        <Form.Item name="checkItem">
          <TextArea
            autoSize={{
              minRows: 2,
              maxRows: 6,
            }}
            placeholder="Add a more detailed checklist"
          />
        </Form.Item>
        <Form.Item>
          <div className="checklist-submit-section">
            <Space>
              <Button type="primary" className="btn-primary" htmlType="submit">
                Add
              </Button>

              <Button type="text" onClick={hideFormHandler}>
                Cancle
              </Button>
            </Space>

            {/* <div>
              <Space>
                <Button type="text">
                  @<a href="/">Assign</a>
                </Button>
                <Button type="text">
                  @<a href="/">Due Date</a>
                </Button>
                <Button type="text">@</Button>
                <Button type="text">@</Button>
              </Space>
            </div> */}
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PrjCardCheckForm;
