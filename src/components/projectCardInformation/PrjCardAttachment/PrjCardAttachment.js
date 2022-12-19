import "./PrjCardAttachment.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Button, Modal } from "antd";
import { SwitcherOutlined } from "@ant-design/icons";
import { TfiArrowTopRight } from "react-icons/tfi";
const ModalAttachment = ({ label }) => {
  const { Title } = Typography;
  const [attachmentModal, setAttachmentModal] = useState(false);
  return (
    <>
      <div className="attachment-section">
        <div className="attachment-header-section">
          <div className="attachment-icon-section">
            <SwitcherOutlined className="icon" />
          </div>
          <div className="header">
          <Title level={4}>{label}</Title>
          </div>
          
        </div>

        <div className="attachment-content-section">
          <div className="link-section">
            <div className="link-image">LINK</div>
            <div className="link-matter">
              <p className="attachment-link">
                link http://antd_wesite
                <span>
                  
                  <TfiArrowTopRight />
                </span>
              </p>
              <p>
                Added 43 minutes go - <a href="/">Comment</a> -
                <a href="/">Remove</a> - <a href="/">Edit</a>
              </p>
            </div>
          </div>
          <Button
            type="text"
            onClick={() => {
              setAttachmentModal(true);
            }}
          >
            Add an Attachment
          </Button>
          <Modal
            title="Add Attachment Pop-up"
            centered
            footer={null}
            open={attachmentModal}
            onOk={() => setAttachmentModal(false)}
            onCancel={() => setAttachmentModal(false)}
          ></Modal>
        </div>
      </div>
    </>
  );
};

export default ModalAttachment;

ModalAttachment.propTypes = {
  label: PropTypes.string.isRequired,
};
ModalAttachment.defaultProps = {
  label: "Attachments",
};
