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
      e.preventDefault();
      if (boardTitle !== undefined) {
        dummyListData[uuidv4()] = { name: boardTitle, task: [] };
      }
  
      setShowAddBoard(false);
  }



  // function addNewListToBoard() {
   
  
  // }

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
