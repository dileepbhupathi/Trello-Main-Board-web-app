import React from "react";
import "./PrjCardDescriptionForm.scss";
import TextArea from "antd/es/input/TextArea";
import { Form, Space, Button } from "antd";

const PrjCardDescriptionForm = ({
  eachBoardItem,
  selectedCardId,
  setbtndisabled,
  btndisabled,
  setDescriptionData,
  setEnableEditMode,
  enableEditMode,
  descriptionData,
  CancleButtonLabel,
}) => {
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
    console.log("description submitted : ", e.data);
    const descriptionDataValue = e.data;

    const request = window.indexedDB.open("InitialData", 2);
    request.onsuccess = () => {
      const db = request.result;
      const totaListsData = db
        .transaction(["lists"], "readwrite")
        .objectStore("lists");
      let indexOfClickedCard = eachBoardItem.task.findIndex(function (
        eachCard
      ) {
        if (eachCard.id === selectedCardId.id) {
          return true;
        } else {
          return false;
        }
      });
      let getColumnToAddDescription = totaListsData.get(eachBoardItem.index);
      getColumnToAddDescription.onsuccess = (event) => {
        let cardToBeAdded = event.target.result;
        cardToBeAdded.task[indexOfClickedCard].description =
          descriptionDataValue;
        console.log("is changed or not", cardToBeAdded);
        totaListsData.put(cardToBeAdded);
      };
      console.log("indexOfClickedCard", indexOfClickedCard);
    };
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
