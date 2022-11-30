import React, { useState } from "react";
import "./RightPopup.scss";
<<<<<<< HEAD
import { ContentComponent } from "../ContentComponents/Content";
import { Members } from "../Members/members";
=======
import {ContentComponent} from '../ContentComponents/Content'
import {Members} from '../Members/members';
>>>>>>> 6168d58e3b48595521f5d44fc2ea404a76692a2b
import { Labels } from "../Labels/labels";
import { Checklist } from "../Checklist/checklist";
import { Dates } from "../Dates/dates";
import { Attachment } from "../Attachment/attachment";
import { Cover } from "../Cover/cover";
import { Button, Modal } from "antd";
import { PicCenterOutlined } from "@ant-design/icons";

function RightPopup() {
<<<<<<< HEAD
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="right-top-container">
        <h3>Add to card</h3>
        <Members />
        <Labels />
        <Checklist />
        <Dates />
        <Attachment />
        <Cover />
        <Button className="right-container-button" disabled={true}>
          <PicCenterOutlined />
          Custom Fields
        </Button>
        <p>Add dropdowns, text fields, dates and more to your cards.</p>
        <Button className="trail-button" onClick={showModal}>
          Start free trail
        </Button>
        <Modal
=======
   const [isModalOpen, setIsModalOpen] = useState(false);
   const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
      };

  return (
    <>
    <div className="right-top-container">
      <h3>Add to card</h3>
      <Members/>
      <Labels/>   
      <Checklist/>     
      <Dates/>
      <Attachment/>
      <Cover/>
      <Button className="right-container-button" disabled={true}>
        <PicCenterOutlined />
          Custom Fields
      </Button>
      <p>Add dropdowns, text fields, dates and more to your cards.</p>
      <Button className="trail-button" onClick={showModal}>
        Start free trail
      </Button>
      <Modal
>>>>>>> 6168d58e3b48595521f5d44fc2ea404a76692a2b
          mask={false}
          width={500}
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
<<<<<<< HEAD
          <img
            alt="trail"
            src="https://a.trellocdn.com/prgb/dist/images/free-trial/confetti.d5edd99478515693b894.svg"
          />
          <div className="trail-container">
            <h2>Try Trello Premium free for 14 days</h2>
            <p>Explore the best of Trello - no credit card required.</p>
            <ul className="trail-container-list">
              <li className="trail-container-list-item">Unlimited boards</li>
              <li className="trail-container-list-item">Advanced checklists</li>
              <li className="trail-container-list-item">
                Admin and security features
              </li>
              <li className="trail-container-list-item">
                Unlimited automations
              </li>
              <li className="trail-container-list-item">And more!</li>
            </ul>
            <button className="trail-container-button">Start free trail</button>
            <a href="blank" alt="new">
              Learn more about Trello plan features
            </a>
          </div>
        </Modal>
        <ContentComponent />
=======
        <img alt="trail" src="https://a.trellocdn.com/prgb/dist/images/free-trial/confetti.d5edd99478515693b894.svg"/>
        <div className="trail-container">
          <h2>Try Trello Premium free for 14 days</h2>
          <p>Explore the best of Trello - no credit card required.</p>
          <ul className="trail-container-list">
            <li className="trail-container-list-item">Unlimited boards</li>
            <li className="trail-container-list-item">Advanced checklists</li>
            <li className="trail-container-list-item">Admin and security features</li>
            <li className="trail-container-list-item">Unlimited automations</li>
            <li className="trail-container-list-item">And more!</li>
          </ul>
          <button className="trail-container-button">Start free trail</button>
          <a href="blank" alt="new">Learn more about Trello plan features</a>
        </div>
        </Modal>
      <ContentComponent/>
  
>>>>>>> 6168d58e3b48595521f5d44fc2ea404a76692a2b
      </div>
    </>
  );
}
<<<<<<< HEAD
export default RightPopup;
=======
export default RightPopup;
>>>>>>> 6168d58e3b48595521f5d44fc2ea404a76692a2b
