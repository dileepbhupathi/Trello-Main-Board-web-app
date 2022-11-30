import React, { useState } from 'react';
import '../RightPopup/RightPopup.scss';
import { Popover,Button, Skeleton, Upload, message, List, Card} from 'antd';
import {coverCardsBgColor,coverImages} from "../../Constants/RightPopupData/data";
import {
    UserOutlined
  } from "@ant-design/icons";


export const Cover = () => {
    const [coverData, setCoverData] = useState({});
    const sendBgColorCover=(item)=>{
      setCoverData(item);
    }
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
    const cover=(
        <div className="right-top-popover-container">
        <hr />
              <p>Size</p>
              <div className="cover-skeleton-container">    
                <div className="cover-skeleton" >
                  <div  style={{ backgroundColor: coverData.bgColor }}>
                    hi
                  </div>
                  <Skeleton
                      avatar
                      paragraph={{
                        rows: 4,
                      }}
                  />
                </div>
              
              <Skeleton
              style={{ backgroundColor: coverData.bgColor }} 
    
              className="cover-skeleton"
                paragraph={{
                  rows: 3,
                }}
                avatar
              />
              </div>
              <p>Colors</p>
              <List
                  width="100%"
                  grid={{ column: 5 }}
              dataSource={coverCardsBgColor}
              renderItem={(item)=>(
                <List.Item>
                  <Card onClick={()=>sendBgColorCover(item)}
                    className="label-card-bgcolor"
                    style={{ backgroundColor: item.bgColor }}
                  ></Card>
                </List.Item>
              )}/>
              <p>Attachments</p>
              <Upload {...props}>
                <Button className="cover-upload-btn" >Upload a cover page</Button>
              </Upload>
              <p>Tip: Drag an image on to the card to upload it.</p>
              <p>Photos from Unsplash</p>
              <List
                  grid={{ column: 3 }}
                dataSource={coverImages}
                renderItem={(item)=>(
                  <List.Item >
                    <img className="cover-images" src={item.url} alt="coverImage"/>
                  </List.Item>
                )}
              />
              <Button className="cover-upload-btn">Search for Photos</Button>
        <p>By using images from unsplash, you agree to their <a href="https://unsplash.com/license">license</a> and <a href="https://unsplash.com/terms">Terms of Service</a></p></div>
      );
  return (
    <Popover content={cover} trigger="click" title="Cover">
    <Button className="right-container-button">
      <UserOutlined />
      Cover
    </Button>
    </Popover>
  )
}
