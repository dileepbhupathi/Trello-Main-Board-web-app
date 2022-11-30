import "./ModalAttachment.scss";
import React, { useState } from "react";
import { Typography,Button,Modal } from "antd";
import { SwitcherOutlined } from "@ant-design/icons";
import {TfiArrowTopRight} from 'react-icons/tfi'
const ModalAttachment = () => {
    const {Title} = Typography;
  const [attachmentModal, setAttachmentModal] = useState(false);
  return (
    <>
      <section className="attachment-section">
        <div className="attachment-icon-section">
          <SwitcherOutlined style={{ fontSize: "30px" }} />
        </div>
        <section className="attachment-content-section">
          <Title level={4}>Attachments</Title>
          <section className="link-section">
            <section className="link-image">LINK</section>
            <section className="link-matter">
              <p className="attachment-link">
                link http://antd_wesite
                <span>
                  {" "}
                  <TfiArrowTopRight />
                </span>
              </p>
              <p>
                Added 43 minutes go - <a href="/">Comment</a> -{" "}
                <a href="/">Remove</a> - <a href="/">Edit</a>
              </p>
            </section>
          </section>
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
        </section>
      </section>
    </>
  );
};

export default ModalAttachment;
