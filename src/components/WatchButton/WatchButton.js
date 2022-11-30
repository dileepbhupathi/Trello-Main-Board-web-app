import { Button } from "antd";
import React from "react";
import { FiEye } from "react-icons/fi";
import { TiTick } from "react-icons/ti";


export const WatchButton = ({isWatch,removeWatch,changesToWatch}) => {
  return (
    <>
      {isWatch ? (
        <Button className="action-button-list" onClick={removeWatch}>
          <FiEye className="button-list-icons" /> Watch{" "}
          <span className="tick-icon-container">
            <TiTick className="tick-icon" />
          </span>
        </Button>
      ) : (
        <Button className="action-button-list" onClick={changesToWatch}>
          <FiEye className="button-list-icons" /> Watch
        </Button>
      )}
    </>
  );
};
