import React, { useEffect, useState } from "react";
import "./projBoardContainer.scss";
import { Button, Popover } from "antd";
// import { dummyListData } from "../../Constants/dummyListData";
import { X } from "react-feather";
import { ProjBoardCardsContainer } from "../ProjBoardCardsContainer/projBoardCardsContainer";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { BsThreeDots } from "react-icons/bs";
import {
  ListItemMenuData,
  MenuAutomationData,
} from "../../Constants/MenuData/MenuData";

export const ProjBoardContainer = () => {
  const [columns, setcolumns] = useState([]);
  let data=[];
  // data.push(columns)

  const [showAddBoard, setShowAddBoard] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");
  useEffect(() => {}, []);

  function sumbission(e) {
    e.preventDefault();
    // if (boardTitle !== undefined) {
    //   dummyListData[uuidv4()] = { name: boardTitle, task: [] };
    // }
    setShowAddBoard(false);

    //indexeDB code....................//

    const request = indexedDB.open("TrelloData", 3);
    request.onerror = (event) => {
      console.log(`database error: ${event.target.errorCode}`);
    };
    request.onsuccess = () => {
      console.log("success");
    };

    //  create the Contacts object store and indexes
    request.onupgradeneeded = () => {
      let db = request.result;
      console.log("db", db); // create the Contacts object store // with auto-increment id

      let store = db.createObjectStore("lists", {
        keyPath: "index",
        autoIncrement: true,
      }); // create an index on the email property
      console.log(store);
      let index = store.createIndex("Name", "Name", {
        unique: true,
        keyPath: "Name",
      });
      console.log("index", index);
    };

    function insertContact(db, lists) {
      // create a new transaction

      const txn = db.transaction(["lists"], "readwrite"); // get the Contacts object store
      const store = txn.objectStore("lists"); //
      let query = store.add(lists); // handle success case

      query.onsuccess = function (event) {
        console.log(event);
      }; // handle the error case

      query.onerror = function () {
        // console.log(event.target.errorCode);
      }; // close the database once the // transaction completes

      txn.oncomplete = function () {
        db.close();
      };

      // setcolumns(indexedOutput);
    }

    request.onsuccess = () => {
      let db = request.result;
      // let db=request.result;
      insertContact(db, {
        uniqueId: uuidv4(),
        Name: boardTitle,
        task: [
          // { id: uuidv4(), content: "Weekly Updates" }
      ],
      });
      let indexedOutput = db.transaction("lists").objectStore("lists").getAll();
      indexedOutput.onsuccess = function (event) {
        const output = event.target.result;
        // console.log(indexedData);
        data.push(output);
        setcolumns(output);
      };
      // console.log("columns",columns);
    };
  }
  console.log("data",data);
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];

      const destColumn = columns[destination.droppableId];

      const sourceItems = [...sourceColumn.task];
      const destItems = [...destColumn.task];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          task: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          task: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.task];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          task: copiedItems,
        },
      });
    }
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
      <p className="menu-content">Archive all cards in this list...</p>
      <hr />
      <p className="menu-content">Archive this list</p>
    </div>
  );

  return (
    <div className="entire-board-bg">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setcolumns)}
      >
        <div className="boards-alignment">
          {Object.entries(columns).map(([columnId, column], index) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    // style={{
                    //   background: snapshot.isDraggingOver ? "" : "",
                    //   padding: 4,
                    //   width: 330,
                    //   minHeight: 500,
                    // }}
                  >
                    <ul className="list-item">
                      <li className="each-board-list-bg" key={column.uniqueId}>
                        <div className="board-item-header">
                          <h1 className="project-title">{column.Name}</h1>
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
                        <ProjBoardCardsContainer
                          eachBoardItem={column}
                          key={columnId}
                        />
                      </li>
                    </ul>
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          ))}

          {showAddBoard ? (
            <form onSubmit={sumbission}>
              <div className="add-list-container">
                <input
                  type="text"
                  placeholder="Enter a Title for this Board"
                  className="add-card-input"
                  onChange={(event) => setBoardTitle(event.target.value)}
                  autoFocus
                />
                <div className="add-card-container">
                  <Button htmlType="submit" className="add-inner-card">
                    Add List
                  </Button>
                  <X
                    onClick={() => setShowAddBoard(false)}
                    className="cancel-icon"
                  />
                </div>
              </div>
            </form>
          ) : (
            <Button
              className="add-list-button"
              onClick={() => setShowAddBoard(true)}
            >
              <span>+</span>Add List Container
            </Button>
          )}
        </div>
      </DragDropContext>
    </div>
  );
};
