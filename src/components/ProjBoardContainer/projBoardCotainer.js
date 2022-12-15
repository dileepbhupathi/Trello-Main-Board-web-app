import React, {  useState } from "react";
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

  const [showAddBoard, setShowAddBoard] = useState(false);

  const [boardTitle, setBoardTitle] = useState();


  function sumbission(e) {
    e.preventDefault();

    setShowAddBoard(false);

    const request = indexedDB.open("InitialData", 2);

    // request.onerror = (event) => {
    //   console.log(`database error: ${event.target.errorCode}`);
    // };
    // request.onsuccess = () => {
    //   console.log("success");
    // };

    // -------------------

    //  create the Contacts object store and indexes
    
    function insertContact(db, lists) {
      // create a new transaction
      const txn = db.transaction(["lists"], "readwrite"); // get the Contacts object store
      const store = txn.objectStore("lists"); //
      let query = store.add(lists); // handle success case

      query.onsuccess = function (event) {
        console.log(event);
      }; // handle the error case

      // query.onerror = function () {
      //   // console.log(event.target.errorCode);
      // }; // close the database once the // transaction completes

      txn.oncomplete = function () {
        db.close();
      };
    }

    request.onupgradeneeded = () => {

      let db = request.result;

      // console.log("db", db); // create the Contacts object store // with auto-increment id

      let store = db.createObjectStore("lists", {
        keyPath: "index",
        autoIncrement: true,
      }); // create an index on the email property

      let index = store.createIndex("Name", "Name", {keyPath:'name',
        unique: true,
      });
      //    let taskindex = store.createIndex('task', 'task', {
      //     unique: true
      // });
      console.log("index", index);
      //  console.log("index",taskindex);
    };

    request.onsuccess = () => {

      const db = request.result;
      
      console.log(db)

      insertContact(db, {
        uniqueId: uuidv4(),
        Name: boardTitle,
        task: [
          // { id: uuidv4(), content: "Weekly Updates" },
          // { id: uuidv4(), content: "Tasks Done" },
        ],
      });


      let items = db.transaction(["lists"], "readwrite").objectStore("lists").getAll()
      
      items.onsuccess = function (event) {

        const indexedDBData = event.target.result;

        setcolumns(indexedDBData);

        // if (boardTitle !== undefined) {
        //   indexedDBData[uuidv4()] = { name: boardTitle, task: [] };
        // }
      };

      // console.log("items are : ", items);
      // insertContact(db, {
      //   uniqueId: uuidv4(),
      //   Name: "Pending",
      //   task: [
      //     { id: uuidv4(), content: "Legal review" },
      //     { id: uuidv4(), content: "Social media assets" },
      //   ],
      // });
      // insertContact(db, {
      //   uniqueId: uuidv4(),
      //   Name: "Todo",
      //   task: [
      //     { id: uuidv4(), content: "Edit email drafts" },
      //     { id: uuidv4(), content: "Sketch site banner" },
      //   ],
      // });
      // insertContact(db, {
      //   uniqueId: uuidv4(),
      //   Name: "Blocked",
      //   task: [
      //     { id: uuidv4(), content: "Freelancer contracts" },
      //     { id: uuidv4(), content: "Budget approval" },
      //   ],
      // });
      // insertContact(db, {
      //   uniqueId: uuidv4(),
      //   Name: "Done",
      //   task: [
      //     { id: uuidv4(), content: "Submite Q1 report" },
      //     { id: uuidv4(), content: "Campaign Proposal" },
      //   ],
      // });
    };

  }
  // console.log("data",data);

  // const onDragEnd = (result, columns, setColumns) => {
  //   if (!result.destination) return;
  //   const { source, destination } = result;

  //   if (source.droppableId !== destination.droppableId) {
  //     const sourceColumn = columns[source.droppableId];

  //     const destColumn = columns[destination.droppableId];

  //     const sourceItems = [...sourceColumn.task];
  //     const destItems = [...destColumn.task];
  //     const [removed] = sourceItems.splice(source.index, 1);
  //     destItems.splice(destination.index, 0, removed);
  //     setColumns({
  //       ...columns,
  //       [source.droppableId]: {
  //         ...sourceColumn,
  //         task: sourceItems,
  //       },
  //       [destination.droppableId]: {
  //         ...destColumn,
  //         task: destItems,
  //       },
  //     });
  //   } else {
  //     const column = columns[source.droppableId];
  //     const copiedItems = [...column.task];
  //     const [removed] = copiedItems.splice(source.index, 1);
  //     copiedItems.splice(destination.index, 0, removed);
  //     setColumns({
  //       ...columns,
  //       [source.droppableId]: {
  //         ...column,
  //         task: copiedItems,
  //       },
  //     });
  //   }
  // };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];

      const destColumn = columns[destination.droppableId];
     
      const sourceItems = [...sourceColumn.task];
      const destItems = [...destColumn.task];
      const [removed] = sourceItems.splice(source.index, 1);
     
      // let idOfRemovingItem = removed.id;

      const UpdateIndexDbRequest = indexedDB.open("InitialData", 2);

      UpdateIndexDbRequest.onsuccess = () => {

        // let taskToBeRemovedIndex;

        const dataBase = UpdateIndexDbRequest.result;

        let totalColumns = dataBase
          .transaction(["lists"], "readwrite")
          .objectStore("lists");

        let columnCardToBeRemoved = totalColumns.get(sourceColumn.index);

        columnCardToBeRemoved.onsuccess = (event) => {

          let sourceValueColumn = event.target.result;

          sourceValueColumn.task.splice(source.index, 1);

          totalColumns.put(sourceValueColumn);
        };

        let columnToBeAdded = totalColumns.get(destColumn.index);

        columnToBeAdded.onsuccess = (event) => {

          const destValueColumn = event.target.result;

          console.log("got destColumn", destValueColumn);

          destValueColumn.task.splice(destination.index, 0, removed);

          console.log("added array", destValueColumn);

          totalColumns.put(destValueColumn);
        };
      };

      destItems.splice(destination.index, 0, removed);

      // console.log("destItems", destItems);
      // console.log("destcolumn", destColumn);

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
    } 
    // else {
    //   const column = columns[source.droppableId];
    //   const copiedItems = [...column.task];
    //   const [removed] = copiedItems.splice(source.index, 1);
    //   copiedItems.splice(destination.index, 0, removed);
    //   setColumns({
    //     ...columns,
    //     [source.droppableId]: {
    //       ...column,
    //       task: copiedItems,
    //     },
    //   });
    // }
    else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.task];
      const [removed] = copiedItems.splice(source.index, 1);
      const updateDbWithInTheColumn = indexedDB.open("InitialData", 2);
      updateDbWithInTheColumn.onsuccess = () =>{

        const dataBase = updateDbWithInTheColumn.result;

        let totalColumns = dataBase
          .transaction(["lists"], "readwrite")
          .objectStore("lists");
        let ChangesWithInTheColumn = totalColumns.get(column.index);
        console.log("changes with in the column",ChangesWithInTheColumn )
        ChangesWithInTheColumn.onsuccess = (event) =>{
          const sameColumnValue = event.target.result;
          sameColumnValue.task.splice(source.index,1);
          sameColumnValue.task.splice(destination.index,0 , removed)
          totalColumns.put(sameColumnValue)

        }


      }

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

  //indexeDB code....................//

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
          {Object.entries(columns).map(([columnId, column]) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => {
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
