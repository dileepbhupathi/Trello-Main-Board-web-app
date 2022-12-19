import "./PrjCardDeleteCheck.scss";
import { Button, Modal } from "antd";
import React,{useState} from 'react';
const PrjCardDeleteCheck = ({setNewCheckboxData,setPercent}) => {
  const [checklistDeleteModal, setChecklistDeleteModal] = useState(false);
 // DELETE ENTIRE CHECKLIST
 const deleteEntireCheckData = () => {
  setNewCheckboxData([])
  setPercent(0)
  setChecklistDeleteModal(false);
  console.log("checkbox data deleted successful");
};
  return (
    <>
      <div className="project-delete-check">
        <Button type="text" onClick={() => setChecklistDeleteModal(true)}>
          Delete
        </Button>
      </div>
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
          Deleting a checklist is permanent and there is no way to get it back.
        </p>
        <Button type="primary" danger onClick={deleteEntireCheckData}>
          Delete CheckList
        </Button>
      </Modal>
    </>
  );
};

export default PrjCardDeleteCheck;
