import React, { useEffect, useState } from 'react';
import '../RightPopup/RightPopup.scss';
import { Popover,Button, Input, List,Row, Col, Checkbox } from 'antd';
import {
    EditOutlined,
    TagOutlined,
    CloseOutlined,
  } from "@ant-design/icons";
import {dummyData,labelBgColorsData} from "../../Constants/RightPopupData/data";


export const Labels = () => {
  const [data, setData] = useState([]);
  const [eachData, setEachData] = useState({});
  const [inputValue,setInputValue]=useState("");
  const [addCardColor,setAddCardColor]=useState();
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
  const sendEachData = (each) => {
    setEachData(each);
    setAddCardColor(each.bgColor);
  };
  const addLabelData=()=>{
    const newObj={
      name:inputValue,
      bgColor:addCardColor,
    };
    dummyData.push(newObj);
    console.log(inputValue);
    console.log(dummyData);
  }
 
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
          <Button type="primary" onClick={()=>addLabelData()}>Save</Button>
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
  return (
    <Popover content={labels} trigger='click' title="labels">
      <Button className="right-container-button">
        <TagOutlined />
        Labels
      </Button>
    </Popover>
  )
}
