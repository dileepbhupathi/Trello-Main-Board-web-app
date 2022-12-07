import React, { useState } from "react";
import "./Filter.scss";
// import { IoFilterOutline } from "react-icons/io5";
// import { ImPower } from "react-icons/im";
// import { BsPerson } from "react-icons/bs";
import Search from "antd/es/transfer/search";
// import { BiTimeFive } from "react-icons/bi";
import { Button, Checkbox, Col, Modal, Row, Select, Typography } from "antd";
// import { SlCalender } from "react-icons/sl";
// import {TiTag} from 'react-icons/ti'
import { Label } from "../NavbarLabel/Label";
import PropTypes from "prop-types";
import {BsFilterLeft} from 'react-icons/bs'


export const FilterComponent = ({label,icon}) => {
  const { Text } = Typography;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSearch = (value) => console.log(value);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Button
        className={isModalOpen ? "filter-button" : "no-filter-button"}
        onClick={showModal}
      >
        {/* <IoFilterOutline
          className={isModalOpen ? "filter-icon" : "calender-icon"}
        /> */}
        <span className="costumized-icon">
        {icon}
        </span>
        {label}
      </Button>
      <Modal
        mask={false}
        title="Filter"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="filter-popup"
        footer={null}
      >
        <div>
          <hr />
          <Text>Keyword</Text>
          <Search
            placeholder="Enter a keyword..."
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
          <Text>Search cards, members, labels, and more.</Text>
        </div>
        <div>
          <Text>Members</Text>
          <ul className="members-container">
            <li>
              <Row>
                <Col span={24}>
                  <Checkbox value="" className="members-list">
                    <div className="memebers-list-container">
                      {/* <span className="icon-container">
                <BsPerson className="person-icon" />
              </span> */}
                      <span>No memebers</span>
                    </div>
                  </Checkbox>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span={24}>
                  <Checkbox value="no memebers" className="members-list">
                    {/* <span className="cards-assigned-container">DB</span> */}
                    Cards assigned to me
                  </Checkbox>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
        <div>
          <Text>Due date</Text>
          <ul>
            <li>
              <Row>
                <Col span={24}>
                  <Checkbox className="members-list">
                    {/* <span className="icon-container">
              <SlCalender className="person-icon" />
            </span> */}
                    No dates
                  </Checkbox>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span={24}>
                  <Checkbox className="members-list">
                    {/* <span className="time-icon-container">
              <BiTimeFive className="time-icon" />
            </span> */}
                    overdue
                  </Checkbox>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span={24}>
                  <Checkbox className="members-list">
                    {/* <span className="time-icon-due-container">
              <BiTimeFive className="time-icon" />
            </span> */}
                    Due in the next day
                  </Checkbox>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span={24}>
                  <Checkbox className="members-list">
                    {/* <span className="time-icon-due-month-container">
              <BiTimeFive />
            </span> */}
                    Due in the next week
                  </Checkbox>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span={24}>
                  <Checkbox className="members-list">
                    {/* <span className="time-icon-due-month-container">
              <BiTimeFive />
            </span> */}
                    Due in the next month
                  </Checkbox>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span={24}>
                  <Checkbox className="members-list">
                    Marked as complete
                  </Checkbox>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span={24}>
                  <Checkbox className="members-list">
                    Not marked as complete
                  </Checkbox>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
        <div>
          <Text>labels</Text>
          <ul>
            <li>
              <Row>
                <Col span={24}>
                  <Checkbox className="members-list">
                    {/* <span className="time-icon-due-month-container"><TiTag className="person-icon"/></span> */}
                    No labels
                  </Checkbox>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span={24}>
                  <Checkbox className="members-list">
                    <Label />
                  </Checkbox>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
        <hr/>
        <div>
        <Select
      defaultValue="Any match"
      style={{
        width: 470,
      }}
      onChange={handleChange}
      // options={[
      //   {
      //     value: 'Any match',
      //     label: 'Any match ',
      //   },
      //   {
      //     value: 'exact match',
      //     label: 'Exact match',
      //   },
      // ]}
    >
      <Select.Option value='Any Match'>
        <Text  className='select-options-list'>Any Match</Text>
        <Text>Matches any label and any memeber</Text>
      </Select.Option>
      <Select.Option value='Exact Match'>
        <Text className='select-options-list'>Exact Match</Text>
        <Text>Matches any label and any memeber</Text>
      </Select.Option>
    </Select>
        </div>
      </Modal>
    </>
  );
};


FilterComponent.propTypes = {
  label : PropTypes.string.isRequired,
  icon : PropTypes.object.isRequired
}

FilterComponent.defaultProps = {
  label : "Filter",
  icon : <BsFilterLeft />
}