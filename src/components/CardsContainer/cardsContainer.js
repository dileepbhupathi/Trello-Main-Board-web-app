import React, { useState } from "react";
import { Button, Card, Modal, Popover } from "antd";
import { X } from "react-feather";
import "./cards.scss";
import { Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
// import { dummyListData } from "../../fixtures/dummyListData";
// import SelectedListItem from "../SelectedListItem/SelectedListItem";
import ModalPage from "../ModalPage/ModalPage";
import { MdOutlineEdit } from "react-icons/md";
import { GrTextAlignFull } from "react-icons/gr";
import { AiOutlineEye } from "react-icons/ai";
import { CgTemplate } from "react-icons/cg";
import { FiCheckSquare } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { ListItemMenuData, MenuAutomationData } from "../../Constants/MenuData/MenuData";

export const CardsContainer = ({ listItem }) => {
  const [addOption, showAddOption] = useState(false);
  const [inputValue, setInputValue] = useState();

  function submission(e) {
    e.preventDefault();
    let newCard = { id: uuidv4(), content: `${inputValue}` };
    //  newCard =! undefined ? listItem.task.push(newCard)
    if (inputValue !== undefined) {
      listItem.task.push(newCard);
    }
    showAddOption(false);
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
      <hr/>
      {
        ListItemMenuData.map(item => (
          <p className="menu-content">{item}</p>
        ))
      }
      <hr/>
      <p className="menu-content">Sort by...</p>
      <hr/>
      <h4 className="menu-title">Automation</h4>
      {
        MenuAutomationData.map(item => (
          <p className="menu-content">{item}</p>
        ))
      }
      <hr/>
      <p className="menu-content">Move all cards in this list </p>
      <p className="menu-content">Archivr all cards in this list...</p>
      <hr/>
      <p className="menu-content">Archive this list</p>
    </div>
  )

  return (
    <div>
      <li className="list-bg">
        <div className="list-item-header">
          <h1 className="project-title">{listItem.name}</h1>
          <Popover content={listItemMenuPopOver} title='List actions' trigger='click' placement = 'rightTop'>
            <Button className="list-item-menu-button">
              <BsThreeDots />
            </Button>
          </Popover>
        </div>
        {listItem.task.map((item, i) => (
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
        {addOption ? (
          <form onSubmit={submission}>
            <input
              type="text"
              placeholder="Enter a Title for this card"
              className="add-card-input"
              onChange={(event) => setInputValue(event.target.value)}
              autoFocus
            />
            <div className="add-card-container">
              <Button htmlType="submit" className="add-inner-card">
                Add Card
              </Button>
              <X onClick={() => showAddOption(false)} className="cancelIcon" />
            </div>
          </form>
        ) : (
          <Button
            size="large"
            className="add-card-btn"
            onClick={() => showAddOption(true)}
          >
            <AiOutlinePlus className="card-checkbox-icon" />
            Add Card
          </Button>
        )}
      </li>
    </div>
  );
};
