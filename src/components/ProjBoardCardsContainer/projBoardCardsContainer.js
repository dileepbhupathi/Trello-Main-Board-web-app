import React, { useState } from "react";
import { Button, Card, Modal, Popover } from "antd";
import { X } from "react-feather";
import "./projBoardCardsContainer.scss";
import { Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import ModalPage from "../ModalPage/ModalPage";
import { MdOutlineEdit } from "react-icons/md";
import { GrTextAlignFull } from "react-icons/gr";
import { AiOutlineEye } from "react-icons/ai";
import { CgTemplate } from "react-icons/cg";
import { FiCheckSquare } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

import {
  ListItemMenuData,
  MenuAutomationData,
} from "../../Constants/MenuData/MenuData";

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

  const templateDetails = (
    <>
      <hr />
      <Card>
        <p>m mkl</p>
      </Card>
      <Button>
        
          <CgTemplate />
        
      </Button>
    </>
  );

  const [showAddOption, setShowAddOption] = useState(false);
  const [inputForCard, setInputForCard] = useState();

  function addNewCardDetailsToBoard(e) {
    e.preventDefault();
    let newCardToTask = { id: uuidv4(), content: `${inputForCard}` };

    if (inputForCard !== undefined) {
      eachBoardItem.task.push(newCardToTask);
    }
    setShowAddOption(false);
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

  const listItemMenuPopOver = (
    <div className="list-item-menu-popover-container">
      <hr />
      {ListItemMenuData.map((item) => (
        <p className="menu-content">{item}</p>
      ))}
      <hr />
      <p className="menu-content">Sort by...</p>
      <hr />
      <h4 className="menu-title">Automation</h4>
      {MenuAutomationData.map((item) => (
        <p className="menu-content">{item}</p>
      ))}
      <hr />
      <p className="menu-content">Move all cards in this list </p>
      <p className="menu-content">Archivr all cards in this list...</p>
      <hr />
      <p className="menu-content">Archive this list</p>
    </div>
  );

  return (
    <div>
      <li className="each-board-list-bg">
        <div className="board-item-header">
          <h1 className="project-title">{eachBoardItem.name}</h1>
          <Popover
            content={listItemMenuPopOver}
            title="List actions"
            trigger="click"
            placement="rightTop"
          >
            <Button className="list-item-top-right-menu-button">
              <BsThreeDots />
            </Button>
          </Popover>
        </div>
        {eachBoardItem.task.map((item, i) => (
          <Draggable key={item.id} draggableId={item.id} index={i}>
            {(provided, snapshot) => {
              return (
                <>
                  <Card
                    onClick={() => setResetModal(!resetModal)}
                    className="inserted-card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      userSelect: "none",
                      padding: 4,
                      margin: "0 0 8px 0",
                      minHeight: "50px",
                      borderRadius: "0.25em",
                      ...provided.draggableProps.style,
                    }}
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
                    open={resetModal}
                    onOk={() => setResetModal(false)}
                    onCancel={() => setResetModal(false)}
                    className="modalpage"
                    style={{
                      top: 50,
                      borderRadius: "0px",
                    }}
                  >
                    <ModalPage
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
            <Popover
              style={{ backgroundColor: "gray" }}
              content={templateDetails}
              title="Card Templates"
              trigger="click"
              open={openMore}
              onOpenChange={handleOpenChange}
            >
              <CgTemplate className="template-icon-beside-addcard-btn" />
            </Popover>
          </div>
        )}
      </li>
    </div>
  );
};