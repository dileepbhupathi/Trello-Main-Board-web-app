import "./PrjCardActivity.scss";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import PrjCardActivityForm from "../PrjCardActivityForm/PrjCardActivityForm";
import PrjCardActivityList from "../PrjCardActivityList/PrjCardActivityList";
import { useState } from "react";
const PrjCardActivity = () => {
  const [allActivityData, setAllActivityData] = useState([]);
  const [activityButton, setActivityButton] = useState(false);
  const [showActivityData, setShowActivityData] = useState(true);
  const { Title } = Typography;
  const getNewActivity = (data) => {
    setAllActivityData(data);
    setActivityButton(false);
    console.log('new Activity data : ',data)
  };
  const activityListHandler = () => {
    setActivityButton(!activityButton);
    setShowActivityData(!showActivityData);
    console.log('activity data status changed')
  };
  const deleteActivityStatus = (item) => {
    let id = item.id;
    allActivityData.forEach((i) => {
      if (i.id === id) {
        setAllActivityData(allActivityData.filter((activity) => activity.id !== id));
        console.log('selected data deleted success')
      } else {
        console.log("no such id found");
      }
    });
  }
  return (
    <>
      <div className="project-activity-container">
        <div className="activity-icon-container">
          <UnorderedListOutlined style={{ fontSize: "30px" }} />
        </div>
        <div className="activity-header-container">
          <Title level={4}>Activity</Title>
          {allActivityData.length > 0 ? (
            <Button type="text" onClick={activityListHandler}>
              {activityButton ? "Show details" : "Hide details"}
            </Button>
          ) : null}
        </div>
      </div>
      {showActivityData === true ? (
        allActivityData.length > 0 ? (
          <PrjCardActivityList allActivityData={allActivityData} deleteActivityStatus={deleteActivityStatus} />
        ) : null
      ) : null}

      <PrjCardActivityForm getNewActivity={getNewActivity} allActivityData={allActivityData}/>
    </>
  );
};

export default PrjCardActivity;
