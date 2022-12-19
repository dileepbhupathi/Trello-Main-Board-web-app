import "./PrjCardCheckForm.scss";
import { Form, Button, Space } from "antd";
import { v4 as uuid } from "uuid";
import TextArea from "antd/es/input/TextArea";

const PrjCardCheckForm = ({
  selectedCardId,
  setShowForm,
  setHideAddButton,
  getNewCheckboxData,
  eachBoardItem,
  newCheckboxdata
}) => {
  const [checklistform] = Form.useForm();
 
 

  const checklistSubmitHandler = (e) => {
    const newCheckData = [...newCheckboxdata];
    newCheckData.push({
      id: uuid().slice(0, 3),
      checkItem: e.checkItem,
      checkStatus: "unchecked",
    });
    checklistform.resetFields();
    getNewCheckboxData(newCheckData);
    
    const request = window.indexedDB.open("InitialData", 2);
    request.onsuccess = () => {
      const db = request.result;
      const totaListsData = db.transaction(["lists"], "readwrite").objectStore("lists");
      let indexOfClickedCard = eachBoardItem.task.findIndex(function(eachCard){
        if (eachCard.id === selectedCardId.id){
                return true;
        }else{
          return false;
        }

      });
      let getColumnToAddCheckbox = totaListsData.get(eachBoardItem.index);

      getColumnToAddCheckbox.onsuccess = (event) =>{
          let cardToBeAdded = event.target.result;
          cardToBeAdded.task[indexOfClickedCard].checkbox = newCheckData;

          totaListsData.put(cardToBeAdded)
        }
        
  };
}

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

           
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PrjCardCheckForm;
