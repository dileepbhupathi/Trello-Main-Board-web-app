import React from "react";
import "./PrjCardDescriptionForm.scss";
import TextArea from "antd/es/input/TextArea";
import { Form, Space, Button } from "antd";
// import { v4 as uuid } from "uuid";

const PrjCardDescriptionForm = ({
  setbtndisabled,
  btndisabled,
  setDescriptionData,
  setEnableEditMode,
  enableEditMode,
  descriptionData,
  CancleButtonLabel,
}) => {
  // let id = uuid().slice(0, 3)
  const onValuesChange = (allValues) => {
    if (allValues.data !== undefined && allValues.data !== "") {
      setbtndisabled(false);
    } else {
      setbtndisabled(true);
    }
  };
  const onFinishDescriptionHandler = (e) => {
    setDescriptionData(e.data);
    setEnableEditMode(!enableEditMode);
    console.log('description submitted : ',e.data)


    // const request = indexedDB.open("PrjCardInforation", 3);

    // const AddDescriptionIntoDb= (db, description) => {
    //   const tx = db.transaction(["description"], "readwrite");
    //   const store = tx.objectStore("description");
    //   let query = store.add(description);
    //   query.onsuccess = function (event) {
    //     console.log(event);
    //   };

    //   tx.oncomplete = function () {
    //     db.close();
    //   };
    // };

    // request.onupgradeneeded = () => {
    //   let db = request.result;
    //   let store = db.createObjectStore("description", {
    //     keyPath: "index",
    //     autoIncrement: true,
    //   });

    //   // let index = store.createIndex("Content", "Content", {
    //   //   keyPath: "content",
    //   //   unique: true,
    //   // });
    //   // console.log("index");
    // };

    // request.onsuccess = () => {
    //   const db = request.result;
    //   AddDescriptionIntoDb(db, { id: id, description: e.data });
    //   let items = db
    //     .transaction(["description"], "readwrite")
    //     .objectStore("description")
    //     .getAll();
    //   items.onsuccess = function (event) {
    //     console.log("item success");
    //   };
    // };
    
  };


  
  const descriptionEditMode = () => {
    setEnableEditMode(!enableEditMode);
    setbtndisabled(!btndisabled);
  };
  return (
    <div className="Project-card-description-form">
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
              <Button htmlType="submit" type="primary" disabled={btndisabled}>
                Save
              </Button>
              <Button type="text" onClick={descriptionEditMode}>
                {CancleButtonLabel}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PrjCardDescriptionForm;
