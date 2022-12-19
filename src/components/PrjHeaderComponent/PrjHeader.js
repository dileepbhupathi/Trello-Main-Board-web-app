import { Button } from "antd";
import React, { useState } from "react";
import "./PrjHeader.scss";
import { Typography } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { IoMdContacts } from "react-icons/io";
import { MdLeaderboard } from "react-icons/md";
import { TfiAngleDown } from "react-icons/tfi";
import { SlCalender } from "react-icons/sl";
import { IoIosJet } from "react-icons/io";
import { ImPower } from "react-icons/im";
import { FaAngleDoubleUp } from "react-icons/fa";
import { BsThreeDots, BsPersonPlus } from "react-icons/bs";
import { HeaderFilter } from "../HeaderFilter/Filter";

export const PrjHeader = () => {
  const { Text } = Typography;

  const [isFillStar, SetIsFillStar] = useState(false);

  const addFavourite = () => {
    SetIsFillStar(true);
  };

  const removeFavourite = () => {
    SetIsFillStar(false);
  };

  return (
    <>
      <nav className="navbar">
        <section className="header-container">
          <div className="title-container">
            <Text className="title">Project Management</Text>
            {isFillStar ? (
              <Button onClick={removeFavourite} className="transparent-button">
                <StarFilled className="star-yellow" />
              </Button>
            ) : (
              <Button onClick={addFavourite} className="transparent-button">
                <StarOutlined className="star-white" />
              </Button>
            )}
          </div>
          <div className="line-container"></div>
          <div className="workspace-container">
            <Button className="workspace-button">
              <IoMdContacts className="workspace-icon" /> Workspace visible
            </Button>
          </div>
          <div className="line-container"> </div>
          <div className="board-container">
            <Button className="board-button">
              <MdLeaderboard className="board-icon" /> Board
            </Button>
            <Button className="angle-down-button">
              <TfiAngleDown className="angle-down-icon" />
            </Button>
            <Button className="calender-button">
              <SlCalender className="calender-icon" /> Calendar Power-Up
            </Button>
            <Button className="calender-button">
              <IoIosJet className="calender-icon" /> Power-Ups
            </Button>
            <Button className="calender-button">
              <ImPower className="calender-icon" /> Automation
            </Button>
          </div>
          <div className="line-container">  </div>
          <div className="filter-container">
            <HeaderFilter />
          </div>
          <div className="line-container">  </div>
          <div className="avtar">
            <FaAngleDoubleUp className="double-arrow-icon" />
            DB
          </div>
          <div className="avtar1">SP</div>
          <div>
            <Button className="share-button">
              <BsPersonPlus className="person-icon" /> Share
            </Button>
          </div>
          <div className="line-container">  </div>
          <Button className="more-option-button">
            <BsThreeDots className="more-option-icon"/>
          </Button>
        </section>
      </nav>
    </>
  );
};
