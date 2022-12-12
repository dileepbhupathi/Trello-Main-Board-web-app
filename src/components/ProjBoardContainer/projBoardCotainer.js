import React, { useState } from "react";
import "./projBoardContainer.scss";
import { Button } from "antd";
import { dummyListData } from "../../Constants/dummyListData";
import { X } from "react-feather";
import { ProjBoardCardsContainer } from "../ProjBoardCardsContainer/projBoardCardsContainer";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

export const ProjBoardContainer = () => {
  const [columns, setcolumns] = useState(dummyListData);

  const [showAddBoard, setShowAddBoard] = useState(false);
  const [boardTitle, setBoardTitle] = useState();

  function sumbission(e){
    // function getContactById(db, id) {
  //   const txn = db.transaction('lists', 'readonly');
  //   const store = txn.objectStore('lists');

  //   let query = store.getAll(id);
  //   query.onsuccess = (event) => {
  //       if (!request.result) {
  //           console.log(`The contact with ${id} not found`);
  //       } else {
  //           console.log(event.target.result);
  //           console.log(event.target.result.task);
  //       }
  //   };
  //   query.onerror = () => {
  //       console.log(request.errorCode);
  //   }

  //   txn.oncomplete = function () {
  //       db.close();
  //   };
  // };
  // request.onsuccess = () => {
  //   const db = request.result;
  //   getContactById(db, );
  // };
  // const items =  db.transaction(lists).objectStore(lists).getAll()

      e.preventDefault();
      if (boardTitle !== undefined) {
        dummyListData[uuidv4()] = { name: boardTitle, task: [] };
      }
      setShowAddBoard(false);
  }


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



  //indexeDB data ............................//



  const request = indexedDB.open("InitialData", 3);
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

    let index = store.createIndex("Name", "Name", {
      unique: true,
    });
    //    let taskindex = store.createIndex('task', 'task', {
    //     unique: true
    // });
    console.log("index", index);
    //  console.log("index",taskindex);
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
  }
  request.onsuccess = () => {
    const db = request.result;
    insertContact(db, {
      uniqueId: uuidv4(),
      Name: "Project Resources",
      task: [
        { id: uuidv4(), content: "Weekly Updates" },
      ],
    });
   
   
   
  };





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
                      
                      <ProjBoardCardsContainer
                        eachBoardItem={column}
                        key={columnId}
                      />
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
                  <Button
                    htmlType="submit"
                    className="add-inner-card"
                   
                  >
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
