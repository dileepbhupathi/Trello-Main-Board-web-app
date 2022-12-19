import React, { useState } from "react";
import { Button, Card, Modal, Popover } from "antd";
import { X } from "react-feather";
import "./projBoardCardsContainer.scss";
import { Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineEdit } from "react-icons/md";
import { GrTextAlignFull } from "react-icons/gr";
import { AiOutlineEye } from "react-icons/ai";
import { CgTemplate } from "react-icons/cg";
import { FiCheckSquare } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import PrjCardInformationPage from "../projectCardInformation/PrjCardInformationPage/PrjCardInformationPage";

export const ProjBoardCardsContainer = ({ eachBoardItem }) => {

  const [openMore, setOpenMore] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpenMore(newOpen);
  };
  const moreDetails = (
    <div>
      <hr />
      <p> Members..</p>
      <p> Labels..</p>
      <p> position..</p>
    </div>
  );

  
  const id = uuidv4().slice(0, 3);
  const [showAddOption, setShowAddOption] = useState(false);
  const [inputForCard, setInputForCard] = useState();

  function addNewCardDetailsToBoard(e) {
    e.preventDefault();
    setShowAddOption(false);

    const request = indexedDB.open("InitialData", 3);
    let newCardToTask = { id: id, content: `${inputForCard}` };
    request.onsuccess = () => {
      const db = request.result;
      let items = db.transaction(["projectBoard"], "readwrite").objectStore("projectBoard");
      let getItem = items.get(eachBoardItem.index);
      getItem.onsuccess = (event) => {
        let value = event.target.result;
        value.task.push(newCardToTask);
        items.put(value);
      };
    };
    eachBoardItem.task.push(newCardToTask);

  }

  // drag and drop

  // MODAL MAIN POP_UP SANDEEP
  const [resetModal, setResetModal] = useState(false);
  const [isWatch, setIsWatch] = useState(false);

  const changesToWatch = () => {
    setIsWatch(true);
  };

  const removeWatch = () => {
    setIsWatch(false);
  };

  const [isTemplate, setIsTemplate] = useState(false);
  const [isHideFromList, setIsHideFromList] = useState();

  const hideFromList = () => {
    setIsHideFromList(false);
    setIsShowInList(true);
  };

  const [isShowInList, setIsShowInList] = useState(false);

  const showInList = () => {
    setIsShowInList(false);
    setIsHideFromList(true);
  };

  const [isDelete, setIsDelete] = useState(false);
  const [isArchive, setIsArchive] = useState(false);
  const [isSendToBoard, setIsSendToBoard] = useState(false);

  const sendToBoard = () => {
    setIsSendToBoard(true);
    setIsArchive(true);
    setIsDelete(true);
  };

  const sendToArchive = () => {
    setIsSendToBoard(false);
    setIsArchive(false);
    setIsDelete(false);
  };

  const changesToTemplate = () => {
    setIsTemplate(true);
    setIsHideFromList(true);
    setIsDelete(true);
    setIsArchive(true);
  };

  const removesTemplate = () => {
    setIsTemplate(false);
    setIsHideFromList(false);
    setIsDelete(false);
    setIsArchive(false);
  };
  const [selectedCardId, setSelectedCardId] = useState('');
  
  const onClickCardHandler = (i) => {
    setResetModal(!resetModal);
    console.log("clicked Card id :", i.id);
    setSelectedCardId(i);
  };

  return (
    <>
      {eachBoardItem.task.map((item, i) => (
        <Draggable key={item.id} draggableId={item.id} index={i}>
          {(provided, snapshot) => {
            return (
              <>
                <Card
                  onClick={(e) => onClickCardHandler(item)}
                  className="inserted-card"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  
                  key={item.id}
                >
                  <div className="card-label-edit-container">
                    <div className="card-label-container">labels</div>
                    <Button className="card-edit-button">
                      <MdOutlineEdit />
                    </Button>
                  </div>
                  <p className="card-description">{item.content}</p>
                  <div>
                    {isTemplate ? (
                      <span className="card-template-container">
                        <CgTemplate className="card-template-icon" />
                        This card is a template.
                      </span>
                    ) : null}
                    {isWatch ? <AiOutlineEye className="card-icons" /> : null}
                    <GrTextAlignFull className="card-icons" />
                    <span className="card-checkbox-container">
                      <FiCheckSquare className="card-checkbox-icon" /> 0/6
                    </span>
                  </div>
                </Card>
                <Modal
                  centered
                  width={800}
                  footer={null}
                  className="project-card-information"
                  open={resetModal}
                  onOk={() => setResetModal(false)}
                  onCancel={() => setResetModal(false)}
                 
                >
                  <PrjCardInformationPage
                    selectedCardId={selectedCardId}
                    eachBoardItem={eachBoardItem}
                    isWatch={isWatch}
                    changesToWatch={changesToWatch}
                    removeWatch={removeWatch}
                    isTemplate={isTemplate}
                    changesToTemplate={changesToTemplate}
                    removesTemplate={removesTemplate}
                    isHideFromList={isHideFromList}
                    hideFromList={hideFromList}
                    isShowInList={isShowInList}
                    showInList={showInList}
                    isDelete={isDelete}
                    isArchive={isArchive}
                    isSendToBoard={isSendToBoard}
                    sendToBoard={sendToBoard}
                    sendToArchive={sendToArchive}
                  />
                </Modal>
              </>
            );
          }}
        </Draggable>
      ))}
      {showAddOption ? (
        <form onSubmit={addNewCardDetailsToBoard}>
          <Card className="add-new-card-input-space">
            <input
              type="text"
              placeholder="Enter a Title for this card"
              className="add-card-input"
              onChange={(event) => setInputForCard(event.target.value)}
              autoFocus
            />
          </Card>
          <div className="add-card-container">
            <div className="add-card-and-cancel-icon">
              <Button htmlType="submit" className="add-inner-card">
                Add Card
              </Button>
              <X
                onClick={() => setShowAddOption(false)}
                className="cancel-icon-in-addcard"
              />
            </div>
            <div>
              <Popover
                content={moreDetails}
                title="Options"
                trigger="click"
                open={openMore}
                onOpenChange={handleOpenChange}
              >
                <FiMoreHorizontal className="add-more-icon" />
              </Popover>
            </div>
          </div>
        </form>
      ) : (
        <div>
          <Button
            size="large"
            className="add-card-btn"
            onClick={() => setShowAddOption(true)}
          >
            <AiOutlinePlus className="card-checkbox-icon" />
            Add Card
          </Button>
        </div>
      )}
    </>
  );
};