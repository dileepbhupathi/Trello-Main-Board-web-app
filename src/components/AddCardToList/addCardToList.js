import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { Button,Popover } from "antd";
import { X } from "react-feather";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

export const AddCardToList = ({  label, backgroundColor }) => {
  const [addOption, showAddOption] = useState(false);
  const [inputValue, setInputValue] = useState();
  // const [icons, showIcons] = useState(true);
  const [openMore, setOpenMore] = useState(false);


  const handleOpenChange = (newOpen) => {
    setOpenMore(newOpen);
  };
  const moreDetails = (
    <>
    <p> Members..</p>
    <p> Labels..</p>
    <p> position..</p>
  
  
    </>
   )
  
  function submission(e) {
    e.preventDefault();
    let newCard = { id: uuidv4(), content: `${inputValue}` };

    // if (inputValue !== undefined) {
    //   listItem.task.push(newCard);
    //   console.log("new item added", listItem);
    // }
    // showAddOption(false);
  }

  return (
    <div>
      {addOption ? (
        <form onSubmit={submission}>
          <input
            type="text"
            placeholder="Enter a Title for this card"
            className="add-card-input"
            onChange={(event) => setInputValue(event.target.value)}
            autoFocus
          />

          {
            <div className="add-card-container">
              <div className="add-and-cancel-container">
                <Button htmlType="submit" className="add-inner-card">
                  Add Card
                </Button>
                <X
                  onClick={() => showAddOption(false)}
                  className="cancelIcon"
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
          }
          {/* <AddCardInToList showAddOption={showAddOption}/> */}
        </form>
      ) : (
        <Button
          style={backgroundColor && { backgroundColor }}
          className="add-card-btn"
          onClick={() => showAddOption(true)}
        >
          <span>+</span>
          {label}
        </Button>
      )}
    </div>
  );
};
AddCardToList.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

AddCardToList.defaultProps = {
  backgroundColor: null,
  onClick: "item added into list",
};
