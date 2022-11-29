import { Button } from "antd";
import React, { useState } from "react";
import "./Navbar.scss";
import { Typography } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { IoMdContacts } from "react-icons/io";
import { MdLeaderboard } from "react-icons/md";
import { TfiAngleDown } from "react-icons/tfi";
import { SlCalender } from "react-icons/sl";
import { IoIosJet } from "react-icons/io";
import { ImPower } from "react-icons/im";
import { FilterComponent } from "../NavbarFilter/Filter";
import { FaAngleDoubleUp } from "react-icons/fa";
import {BsThreeDots,BsPersonPlus} from 'react-icons/bs'

export const Navbar = () => {
  const { Text } = Typography;

  const [isFillStar, SetIsFillStar] = useState(false);

  const favouriteButton = () => {
    SetIsFillStar(true);
  };

  return (
    <>
      <nav className="navbar">
        <section className="header-container">
          <div className="title-container">
            <Text className="title">Project Management</Text>
            <Button onClick={favouriteButton} className="button">
              {isFillStar ? (
                <StarFilled className="star-icon" />
              ) : (
                <StarOutlined className="star-icon1" />
              )}
            </Button>
          </div>
          <div className="line-container"> | </div>
          <div className="workspace-container">
            <Button className="workspace-button">
              <IoMdContacts className="workspace-icon" /> Workspace visible
            </Button>
          </div>
          <div className="line-container"> | </div>
          <div className="board-container">
            <Button className="board-button">
              <MdLeaderboard className="board-icon" /> Board
            </Button>
            <Button className="button">
              <TfiAngleDown className="angle-down-icon" />
            </Button>
            <Button className="calender-button">
              <SlCalender className="calender-icon" /> Calender Power-Up
            </Button>
            <Button className="calender-button">
              <IoIosJet className="calender-icon" /> Power-Ups
            </Button>
            <Button className="calender-button">
              <ImPower className="calender-icon" /> Automation
            </Button>
          </div>
          <div className="line-container"> | </div>
          <div className="filter-container">
            <FilterComponent />
          </div>
          <div className="line-container"> | </div>
          <div className="avtar">
            <FaAngleDoubleUp className="double-arrow-icon" />
            DB
          </div>
          <div className="avtar1">SP</div>
          <div>
            <Button className="share-button">
            <BsPersonPlus className="person-icon"/> Share
            </Button>
          </div>
          <div className="line-container"> | </div>
          <Button className="more-option-button"> <BsThreeDots/> </Button>
        </section>
      </nav>
    </>
  );
};
