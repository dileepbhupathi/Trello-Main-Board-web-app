import React, { useEffect, useState } from 'react';
import '../../components/RightPopup/RightPopup.scss';
import { Popover,Button, Input, List,Row, Col, Checkbox } from 'antd';
import {
    EditOutlined,
    TagOutlined,
    CloseOutlined,
  } from "@ant-design/icons";
import {dummyData,labelBgColorsData} from "../../Constants/RightPopupData/data";
// import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { LabelListItem } from '../../components/LabelListItem/LabelListItem';


export const Labels = () => {
  // const history=useHistory();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");

  const [eachData, setEachData] = useState({});
  const [addCardColor,setAddCardColor]=useState();
  const [inputValue,setInputValue]=useState({});

  
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
    // window.location.goBack(-1);
  };
  const addEditedLabelData=()=>{
    const editObj={
      name:inputValue,
      bgColor:edit.backgroundColor,
    }
    dummyData[index]=editObj;
    // window.location.goBack(-1);
  }
 
    const [edit,setEdit]=useState({});
    const [add,setAdd]=useState(true);
    const [index,setA]=useState("")
    const editLabel=(item,i)=>{
      setEdit(item);
      setA(i);
      setAdd(false);
    };
    const clearEditData=()=>{
      setEdit({});
      setAdd(true)
    };
   
    const labelEdit=(
        <div className="right-top-popover-label-container">
        <hr/>
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
        <Button className="right-popup-bottom-btn">
          <CloseOutlined />
          Remove colour
        </Button>
        <hr />
        <div className="label-edit-bottom-btn-con">
          {/* <Popover content={labels} title="Labels" > */}
          {/* if (edit === ""){
            <Button type="primary" onClick={()=>addLabelData()}>Save</Button>
          } else {
            <Button type="primary" onClick={()=>addEditedLabelData()}>Save</Button>
          } */}
          {/* </Popover> */}
            
          {add? <Button type="primary" onClick={()=>addLabelData()}>Save</Button>:<Button type="primary" onClick={()=>addEditedLabelData()}>Save</Button>}
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
                renderItem={(item,i) => (
                  <List.Item className="labels-list-item">
                    <Row>
                      <Col span={22}>
                        <Checkbox className="labels-list-item-checkbox" value={item.id}>
                          <LabelListItem item={item}/>
                        </Checkbox>
                      </Col>
                      <Col span={1}>
                        <Popover trigger="click" title="Edit Label" content={labelEdit}>
                          <EditOutlined className="edit-icon" onClick={()=>editLabel(item,i)} />
                        </Popover>
                      </Col>
                    </Row>
                  </List.Item>
                )}
              />
              <Popover content={labelEdit} title="Add label" trigger="click">
                <Button className="right-popup-bottom-btn" onClick={()=>clearEditData()}>Create a new label</Button>
              </Popover>
              <hr />
              <Button className="right-popup-bottom-btn">
                Enable colorblind friendly mode
              </Button>
              <Button className="right-popup-bottom-btn">Give us feedback</Button>
        </div>
      );
  return (
    <Popover content={labels} trigger='click' title="Labels">
      <Button className="right-container-button">
        <TagOutlined />
        Labels
      </Button>
    </Popover>
  )
}
// Labels.propTypes = {
//   label : PropTypes.string.isRequired,
//   // icon : PropTypes.object.isRequired
//   }
// Labels.defaultProps = {
// label : "Labels",
// }