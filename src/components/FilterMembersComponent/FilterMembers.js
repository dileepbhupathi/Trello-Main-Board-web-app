import { Checkbox, Col, Row, Typography } from 'antd'
import React from 'react'

export const FilterMembers = () => {

  const { Text } = Typography;

  return (
    <div className="filter-members">
          <Text className="filter-caption">Members</Text>
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
  )
}
