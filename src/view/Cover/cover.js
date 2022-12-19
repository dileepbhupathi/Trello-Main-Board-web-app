import React, { useState } from 'react';
import '../../components/RightPopup/RightPopup.scss';
import { Popover,Button, Upload, message, List, Card} from 'antd';
import {coverCardsBgColor,coverImages} from "../../Constants/RightPopupData/data";
import {
    LaptopOutlined 
  } from "@ant-design/icons";
  // import PropTypes from 'prop-types';


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
        <div className="right-top-popover-label-container">
        <hr />
              <h4>Size</h4>
              <div className="cover-skeleton-container">    
                <div className="cover-skeleton" >
                  <div className="skeleton-top-container" style={{ backgroundColor: coverData.bgColor }}> 
                  </div>
                  {/* <Skeleton
                      avatar
                      paragraph={{
                        rows: 4,
                      }}
                    //   style={{height:"200px"}}
                  /> */}
                </div>
              <div className="cover-skeleton" style={{ backgroundColor: coverData.bgColor }}>
                {/* <Skeleton
                style={{ backgroundColor: coverData.bgColor }} 
                    paragraph={{
                    rows: 3,
                    }}
                    avatar
                /> */}
              </div>
             
              </div>
              <h4>Colors</h4>
              <List
                  width="100%"
                  grid={{ column: 5 }}
              dataSource={coverCardsBgColor}
              renderItem={(coverCardsEachItem)=>(
                <List.Item>
                  <Card onClick={()=>sendBgColorCover(coverCardsEachItem)}
                    className="label-card-bgcolor"
                    style={{ backgroundColor: coverCardsEachItem.bgColor }}
                    
                  ></Card>
                </List.Item>
              )}/>
              <h4>Attachments</h4>
              <Upload {...props}>
                <Button className="cover-upload-btn" >Upload a cover page</Button>
              </Upload>
              <p>Tip: Drag an image on to the card to upload it.</p>
              <h4>Photos from Unsplash</h4>
              <List
                 grid={{ column: 3 }}
                dataSource={coverImages}
                renderItem={(coverImagesEachItem)=>(
                  <List.Item >
                    <img className="cover-images" src={coverImagesEachItem.url} alt="coverImage"/>
                  </List.Item>
                )}
              />
              <Button className="cover-upload-btn">Search for Photos</Button>
        <p>By using images from unsplash, you agree to their <a href="https://unsplash.com/license">license</a> and <a href="https://unsplash.com/terms">Terms of Service</a></p></div>
      );
  return (
    <Popover content={cover} trigger="click" title="Cover">
    <Button className="right-container-button">
    <LaptopOutlined />
      Cover
    </Button>
    </Popover>
  )
}
// Cover.propTypes = {
//   label : PropTypes.string.isRequired
//   // icon : PropTypes.object.isRequired
//   }
  
//   Cover.defaultProps = {
// label : "Cover",
// }