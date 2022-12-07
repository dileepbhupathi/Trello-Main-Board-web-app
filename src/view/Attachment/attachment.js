import React from 'react';
// import '../components/RightPopup/RightPopup.scss';
import '../../components/RightPopup/RightPopup.scss';
import { Popover,Button, Input, Upload, message } from 'antd';
// import { GrAttachment } from "react-icons/gr";
import {PaperClipOutlined } from "@ant-design/icons";
import PropTypes from 'prop-types';


export const Attachment = ({label}) => {
    const props = {
        name: "file",
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        headers: {
          authorization: "authorization-text",
        },
        onChange(info) {
          if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
    const attachment=(
        <div className="right-top-popover-container">
         <hr />
              <Upload {...props}>Computer</Upload>
              <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=permission%20id_token&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.file&openid.realm&redirect_uri=storagerelay%3A%2F%2Fhttps%2Ftrello.com%3Fid%3Dauth926988&client_id=330642982326-o2b8p0glj3m1o0sgllrpas2m8j9hjn7i.apps.googleusercontent.com&ss_domain=https%3A%2F%2Ftrello.com&gsiwebsdk=shim&service=lso&o2v=1&flowName=GeneralOAuthFlow">
                Google Drive
              </a>
              <br />
              <a href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?redirect_uri=https%3A%2F%2Ftrello.com%2Fonedrive_callback_7.html&client_id=f7936f71-2186-4c33-8553-134e287aefdf&scope=profile%20openid%20https%3A%2F%2Fgraph.microsoft.com%2FFiles.ReadWrite%20https%3A%2F%2Fgraph.microsoft.com%2FUser.Read&response_mode=fragment&state=aad_login&nonce=kSTdx&response_type=id_token+token">
                OneDrive
              </a>
              <hr />
              <label>Attach a link</label>
              <Input
                className="attachment-input"
                placeholder="Paste any link here"
              ></Input>
              <Button className="attach-bottom-btn">Attach</Button>
              <hr />
              <p>
                Tip: You can drag and drop files and links onto cards to upload
                them.
        </p></div>
      );
  return (
    <Popover content={attachment} trigger="click" title="Attachment">
      <Button className="right-container-button">
        <PaperClipOutlined /> 
        {label}
      </Button> 
      </Popover>
  )
}
Attachment.propTypes = {
  label : PropTypes.string.isRequired
  // icon : PropTypes.object.isRequired
  }
Attachment.defaultProps = {
label : "Attachment",
}