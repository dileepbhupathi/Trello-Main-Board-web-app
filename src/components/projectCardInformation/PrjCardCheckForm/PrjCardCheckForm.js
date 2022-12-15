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

 let id = uuid().slice(0, 3);

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
  const request = indexedDB.open("PrjCardInforation", 3);

    const AddCheckbox = (db, checkbox) => {
      const tx = db.transaction(["checkbox"], "readwrite");
      const store = tx.objectStore("checkbox");
      let query = store.add(checkbox);
      query.onsuccess = function (event) {
        console.log(event);
      };

      tx.oncomplete = function () {
        db.close();
      };
    };

    request.onupgradeneeded = () => {
      let db = request.result;
      let store = db.createObjectStore("checkbox", {
        keyPath: "index",
        autoIncrement: true,
      });

      // let index = store.createIndex("Content", "Content", {
      //   keyPath: "content",
      //   unique: true,
      // });
      // console.log("index");
    };

    request.onsuccess = () => {
      const db = request.result;
      AddCheckbox(db, { id: id, checkbox: newCheckData });
      let items = db
        .transaction(["checkbox"], "readwrite")
        .objectStore("checkbox")
        .getAll();
      items.onsuccess = function (event) {
        console.log("item success");
      };
    };
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
