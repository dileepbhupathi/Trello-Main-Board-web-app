import "./ModalDescription.scss";
import React,{useState} from 'react';
import PropTypes from "prop-types";
import { Space, Typography, Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { AlignLeftOutlined } from "@ant-design/icons";
const ModalDescription = ({ description,label,EditButtonLabel,CancleButtonLabel }) => {
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
      <div className="description-container">
        <div className="description-icon-container">
          <AlignLeftOutlined style={{ fontSize: "30px" }} />
        </div>
        <Space direction="vertical">
          <Space>
            <Title level={4}>{label}</Title>
            {descriptionData !== "" ? (
              <Button type="text" onClick={descriptionEditMode}>
                {" "}
                {EditButtonLabel}{" "}
              </Button>
            ) : null}
          </Space>
          {enableEditMode ? (
            <p className="description-paragraph">{descriptionData}</p>
          ) : (
            <div>
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
                      {CancleButtonLabel}
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </div>
          )}
        </Space>
      </div>
    </>
  );
};

export default ModalDescription;
ModalDescription.propTypes = {
  label: PropTypes.string.isRequired,
  EditButtonLabel:PropTypes.string.isRequired,
  CancleButtonLabel:PropTypes.string.isRequired,

}
ModalDescription.defaultProps = {
  label: "Description",
  EditButtonLabel:"Edit",
  CancleButtonLabel:"Cancle"
};