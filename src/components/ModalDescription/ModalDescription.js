import "./ModalDescription.scss";
import React,{useState} from 'react';
import { Space, Typography, Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { AlignLeftOutlined } from "@ant-design/icons";
const ModalDescription = ({ description }) => {
  const [enableEditMode, setEnableEditMode] = useState(false);
  const [descriptionData, setDescriptionData] = useState(description);
  const [btndisabled, setbtndisabled] = useState(true);
  const onValuesChange = (allValues) => {
    if (allValues.data !== undefined && allValues.data !== "") {
      setbtndisabled(false);
    } else {
      setbtndisabled(true);
    }
  };
  const onFinishDescriptionHandler = (values) => {
    setDescriptionData(values.data);
    setEnableEditMode(!enableEditMode);
  };
  const descriptionEditMode = () => {
    setEnableEditMode(!enableEditMode);
    setbtndisabled(!btndisabled);
  };
  const { Title } = Typography;
  return (
    <>
      <section className="description-container">
        <section className="description-icon-container">
          <AlignLeftOutlined style={{ fontSize: "30px" }} />
        </section>
        <Space direction="vertical">
          <Space>
            <Title level={4}>Description</Title>
            {descriptionData !== "" ? (
              <Button type="text" onClick={descriptionEditMode}>
                {" "}
                Edit{" "}
              </Button>
            ) : null}
          </Space>
          {enableEditMode ? (
            <p className="description-paragraph">{descriptionData}</p>
          ) : (
            <section>
              <Form
                onFinish={(data) => onFinishDescriptionHandler(data)}
                onFinishFailed={(error) => {
                  console.log({ error });
                }}
                onValuesChange={onValuesChange}
              >
                <Form.Item name="data">
                  <TextArea
                    autoSize={{
                      minRows: 2,
                      maxRows: 6,
                    }}
                    defaultValue={descriptionData !== "" ? descriptionData : null}
                    placeholder="Add a more detailed description..."
                  />
                </Form.Item>
                <Form.Item>
                  <Space>
                    <Button
                      htmlType="submit"
                      type="primary"
                      disabled={btndisabled}
                    >
                      Save
                    </Button>
                    <Button type="text" onClick={descriptionEditMode}>
                      Cancle
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </section>
          )}
        </Space>
      </section>
    </>
  );
};

export default ModalDescription;
