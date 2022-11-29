import React, { useEffect, useState } from "react";
import "./RightPopup.scss";
import {
  Button,
  Input,
  Select,
  Checkbox,
  List,
  Row,
  Col,
  Upload,
  message,
  Card,
  Skeleton,
  Popover,
} from "antd";
import {
  CheckSquareOutlined,
  FieldTimeOutlined,
  EditOutlined,
  TagOutlined,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Calendar from 'react-calendar';
import { dummyData, labelBgColorsData ,coverCardsBgColor,coverImages} from "../../Constants/RightPopupData/data";
import { GrAttachment } from "react-icons/gr";


function RightPopup() {
  const [eachData, setEachData] = useState({});
  const [addCardColor,setAddCardColor]=useState();
  const [inputValue,setInputValue]=useState("");

  const addLabelData=()=>{
    const newObj={
      name:inputValue,
      bgColor:addCardColor,
    };
    dummyData.push(newObj);
    console.log(inputValue);
    console.log(dummyData);

  }

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setData(dummyData);
    setFilteredData(dummyData);
  }, []);

  const handleFilter = (e) => {
    // console.log(e);
    const searchInput = e.target.value;
    setInput(searchInput);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    if (searchInput === "") {
      setFilteredData(dummyData);
    } else {
      setFilteredData(newFilter);
    }
  };
  const [value, calender] = useState(new Date());
 
  const sendEachData = (each) => {
    setEachData(each);
    setAddCardColor(each.bgColor);
  };

  const [coverData, setCoverData] = useState({});
  const sendBgColorCover=(item)=>{
    setCoverData(item);

  }

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

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
  const members=(
    <div className="right-top-popover-container">
    <hr />
    <Input placeholder="Search members" />
    <Button className="bottom-btn">Show other workspace members</Button>
    </div>
  );
  const [edit,setEdit]=useState("");
  const editLabel=(item)=>{
    setEdit(item);
  };
  const clearEditData=()=>{
    setEdit("");
  };
 
  const labelEdit=(
    <div  className="right-top-popover-container">
    <hr />
    <div className="label-edit-top-con">
      <div
        style={{ backgroundColor: eachData.bgColor }}
        className="label-edit-bg-container"
      >
        <div
          style={{ backgroundColor: eachData.bgColor }}
          className="label-edit-card"
        ></div>
        {/* <p>{each.name}</p> */}
      </div>
    </div>
    <label>Title</label>
    <Input placeholder="Search labels" defaultValue={edit.name} onChange={(event)=>setInputValue(event.target.value)}/>
    {/* grid={{ column: 3 }} */}
    <div className="cards-list">
      <h5>Select a colour</h5>
      <List
        className="label-card-list"
        width="100%"
        grid={{ column: 5 }}
        dataSource={labelBgColorsData}
        itemLayout="horizontal"
        renderItem={(each) => (
          <List.Item>
            <div
              onClick={() => sendEachData(each)}
              className="label-card-bgcolor"
              style={{ backgroundColor: each.bgColor }}
            ></div>
          </List.Item>
        )}
      />
    </div>
    <Button className="bottom-btn">
      <CloseOutlined />
      Remove colour
    </Button>
    <hr />
    <div className="label-edit-bottom-btn-con">
      {/* <Popover content={labels} title="Labels" > */}
      <Button type="primary" onClick={()=>addLabelData(value)}>Save</Button>
      {/* </Popover> */}
      <Button type="primary" danger>
        Delete
      </Button>
    </div>
    </div>
  );
 
  const labels=(
    <div  className="right-top-popover-container">
      <hr />
          <Input
            placeholder="search label"
            value={input}
            onChange={(e) => handleFilter(e)}
          />
          <List
            className="labels-list-container"
            itemLayout="vertical"
            dataSource={filteredData}
            renderItem={(item) => (
              <List.Item className="labels-list-item">
                <Row>
                  <Col span={22}>
                    <Checkbox className="labels-list-item-checkbox" value={item.id}>
                      <div
                        style={{ backgroundColor: item.bgColor }}
                        className="labels-list-item-checkbox-left-container"
                      >
                        <div
                          style={{ backgroundColor: item.cardBgColor }}
                          className="labels-list-item-checkbox-inner-container"
                        ></div>
                        <p>{item.name}</p>
                      </div>
                    </Checkbox>
                  </Col>
                  <Col span={1}>
                    <Popover trigger="click" title="Edit Label" content={labelEdit}>
                      <EditOutlined className="edit-icon" onClick={()=>editLabel(item)} />
                    </Popover>
                  </Col>
                </Row>
              </List.Item>
            )}
          />
          <Popover content={labelEdit} title="Add label" trigger="click">
            <Button className="bottom-btn" onClick={()=>clearEditData()}>Create a new label</Button>
          </Popover>
          <hr />
          <Button className="bottom-btn">
            Enable colorblind friendly mode
          </Button>
          <Button className="bottom-btn">Give us feedback</Button>
    </div>
  );
  const dates=(
    <div  className="right-top-popover-container">
    {/* <DatePicker
            // onClick={openDatePicker}
            // showModal?true:false
            open={true}
            className="date"
            picker="Dates"
          /> */}
          <Calendar onChange={calender} value={value} />
          <div className="date-picker">
            
          </div>
          <br/>
          <label>Start date</label>
          <br />
          <Checkbox>
            <Input placeholder="M/D/YYYY"></Input>
          </Checkbox>
          <br />
          <label>Set due date reminder</label>
          <Select
            style={{ width: "250px" }}
            showSearch
            // placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "None",
                label: "None",
              },
              {
                value: "At time of due date",
                label: "At time of due date",
              },
              {
                value: "5 minutes before",
                label: "5 minutes before",
              },
              {
                value: "10 minutes before",
                label: "10 minutes before",
              },
              {
                value: "15 minutes before",
                label: "15 minutes before",
              },
              {
                value: "1 Hour before",
                label: "1 Hour before",
              },
              {
                value: "2 Hours before",
                label: "2 Hours before",
              },
              {
                value: "1 Day before",
                label: "1 Day before",
              },
              {
                value: "2 Days before",
                label: "2 Days before",
              },
            ]}
          />
          <p>
            Reminders will be sent ti all members and watchers of this card.
          </p>
          <Button className="bottom-btn" type="primary">
            Save
          </Button>
          <Button className="bottom-btn">Remove</Button>
    </div>
  );
  const checkList=(
    <div  className="right-top-popover-container">
    <hr />
          <label>Title</label>
          <Input></Input>
          <label>Copy items from...</label>
          <Select
            style={{ width: "250px" }}
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
    /></div>
  );
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
    <div className="right-top-container">
      <h3>Add to card</h3>
      {/* {popoverData.map((popoverData)=>(
        <Popover content={popoverData.content} trigger="click" title={popoverData.title}>
        </Popover>
      ))} */}
      <Popover content={members} trigger="click" title="Members">
      <Button className="right-container-button">
        <UserOutlined />
        Members
      </Button>
      </Popover>  
      <Popover content={labels} trigger='click' title="labels">
      <Button className="right-container-button">
        <TagOutlined />
        Labels
      </Button>
      </Popover>
      <Popover content={checkList} trigger="click" title="Check List">
      <Button className="right-container-button">
        <CheckSquareOutlined />
        Checklist
      </Button>
      </Popover>      
      <Popover content={dates} trigger="click" title="Dates">
      <Button className="right-container-button">
        <FieldTimeOutlined />
        Dates
      </Button>
      </Popover>  
      <Popover content={attachment} trigger="click" title="Attachment">
      <Button className="right-container-button">
        <GrAttachment />
        Attachment
      </Button> 
      </Popover>
      <Popover content={cover} trigger="click" title="Cover">
      <Button className="right-container-button">
        <UserOutlined />
        Cover
      </Button>
      </Popover>
    </div>
  );
}
export default RightPopup;



