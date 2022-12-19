import React, { useState } from 'react';
import '../../components/RightPopup/RightPopup.scss';
import { Button, Modal } from "antd";
import { PicCenterOutlined,ShopOutlined} from "@ant-design/icons";
// import PropTypes from 'prop-types';

export const Trail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
     <Button className="right-container-button" disabled={true}>
        <PicCenterOutlined />
          Custom Fields
      </Button>
      <p>Add dropdowns, text fields, dates and more to your cards.</p>
      <Button className="trail-button" onClick={showModal}>
      <ShopOutlined />
        Start free trail
      </Button>
      <Modal
          mask={false}
          width={500}
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
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
    </>
  );
}
// Trail.propTypes = {
//     label : PropTypes.string.isRequired
//     // icon : PropTypes.object.isRequired
//     }
    
//     Trail.defaultProps = {
//   label : "Start free trail",
//   }