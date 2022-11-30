import { Button } from "antd";
import React from "react";
import { CgTemplate } from "react-icons/cg";
import { TiTick } from "react-icons/ti";


export const TemplateButton = ({removesTemplate,changesToTemplate,isTemplate}) => {
  return (
    <>
      {isTemplate ? (
        <Button className="action-button-list" onClick={removesTemplate}>
          <CgTemplate className="button-list-icons" /> Template
          <span className="tick-icon-container">
            <TiTick className="tick-icon" />
          </span>
        </Button>
      ) : (
        <Button className="action-button-list" onClick={changesToTemplate}>
          <CgTemplate className="button-list-icons" /> Make template
        </Button>
      )}
    </>
  );
};
