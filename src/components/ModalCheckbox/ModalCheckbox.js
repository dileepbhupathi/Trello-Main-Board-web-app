import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import {
  Space,
  Typography,
  Button,
  Progress,
  Form,
  List,
  Checkbox,
  Modal,
  
} from "antd";
import PropTypes from "prop-types"; 
import "./ModalCheckbox.scss";
import { CheckSquareOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
const ModalCheckbox = ({label}) => {
  const { Title,Text } = Typography;
  const [checklistform] = Form.useForm();
  const [checkList, setCheckList] = useState(false);
  const [checkAdd, setCheckAdd] = useState(true);
  const [checkboxData, setCheckboxData] = useState([]);
  const [check, setCheck] = useState(false);
  const [percent, setPercent] = useState(0);
  const [checklistDeleteModal, setChecklistDeleteModal] = useState(false);
  const [hide, setHide] = useState(false);
  const [allData, setAllData] = useState([]);

  const checklistHandler = () => {
    setCheckList(!checkList);
    setCheckAdd(!checkAdd);
  };
  const checklistSubmitHandler = (e) => {
    const newcheckboxdata = [...checkboxData];
    newcheckboxdata.push({
      id: uuid().slice(0, 3),
      checkItem: e.checkItem,
      checkStatus: "unchecked",
    });
    checklistform.resetFields();
    setCheckboxData(newcheckboxdata);
  };

  const onChangeCheck = (item, e) => {
    if (e.target.checked) {
      setCheck(e.target.checked);
      item["checkStatus"] = "checked";
      setPercent(percent + 100 / checkboxData.length);
    } else {
      setCheck(e.target.unchecked);
      item["checkStatus"] = "unchecked";
      setPercent(percent - 100 / checkboxData.length);
    }
  };
  const deleteEntireCheckData = () => {
    setCheckboxData([]);
    setPercent(0);
    setChecklistDeleteModal(false);
    // console.log("checkbox data deleted successful");
  };
  const hideCheckedItemsHandler = () => {
    setAllData(checkboxData);
    const filtered = checkboxData.filter((item) => {
      return item.checkStatus === "unchecked";
    });
    setCheckboxData(filtered);
    setHide(!hide);
    setCheck(!check);
  };
  const showCheckedItemsHandler = () => {
    setCheckboxData(allData);
    setHide(!hide);
    setCheck(!check);
  };
  return (
    <>
      <section className="checkbox-section">
        <section className="checkbox-icon-container">
          <CheckSquareOutlined style={{ fontSize: "30px" }} />
        </section>
        <Space direction="vertical">
          <section className="checkbox-title-section">
            <section>
              <Title level={4}>{label}</Title>
            </section>
            <section>
              {check ? (
                <Button type="text" onClick={hideCheckedItemsHandler}>
                  Hide Checked Items
                </Button>
              ) : null}
              {hide ? (
                <Button type="text" onClick={showCheckedItemsHandler}>
                  Show Checked Items
                </Button>
              ) : null}
              <Button type="text" onClick={() => setChecklistDeleteModal(true)}>
                Delete
              </Button>
            </section>
            <Modal
              centered
              title="Delete Checklist"
              width={400}
              footer={null}
              open={checklistDeleteModal}
              onOk={() => setChecklistDeleteModal(false)}
              onCancel={() => setChecklistDeleteModal(false)}
            >
              <p>
                Deleting a checklist is permanent and there is no way to get it
                back.
              </p>
              <Button type="primary" danger onClick={deleteEntireCheckData}>
                Delete CheckList
              </Button>
            </Modal>
          </section>
          <Progress percent={percent} />

          {checkboxData.length > 0 ? (
            <List
              dataSource={checkboxData}
              renderItem={(item) => (
                <List.Item>
                  <Checkbox
                    className={
                      item.checkStatus === "checked"
                        ? "overlinestyle"
                        : "disableoverline"
                    }
                    onChange={(e) => {
                      onChangeCheck(item, e);
                    }}
                    defaultChecked={
                      item.checkStatus === "checked" ? true : false
                    }
                  >
                    <Space block="true" className="checklist-item-container">
                      <Text type='secondary'>{item.checkItem}</Text>
                      
                    </Space>
                  </Checkbox>
                </List.Item>
              )}
            />
          ) : null}
          {checkAdd ? (
            <Button type="text" onClick={checklistHandler}>
              Add an Item
            </Button>
          ) : null}
          {checkList ? (
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
                <section className="checklist-submit-section">
                  <Space>
                    <Button
                      type="primary"
                      className="btn-primary"
                      htmlType="submit"
                    >
                      Add
                    </Button>

                    <Button type="text" onClick={checklistHandler}>
                      Cancle
                    </Button>
                  </Space>

                  <section>
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
                  </section>
                </section>
              </Form.Item>
            </Form>
          ) : null}
        </Space>
      </section>
    </>
  );
};

export default ModalCheckbox;



ModalCheckbox.propTypes = {
  label: PropTypes.string.isRequired,

  
};
ModalCheckbox.defaultProps = {
  label:"Checkbox"
};