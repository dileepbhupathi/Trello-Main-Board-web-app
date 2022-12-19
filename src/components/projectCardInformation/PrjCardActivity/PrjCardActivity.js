import "./PrjCardActivity.scss";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import PrjCardActivityForm from "../PrjCardActivityForm/PrjCardActivityForm";
import PrjCardActivityList from "../PrjCardActivityList/PrjCardActivityList";
import { useState, useEffect } from "react";
const PrjCardActivity = ({ eachBoardItem, selectedCardId }) => {
  const [allActivityData, setAllActivityData] = useState([]);
  const [activityButton, setActivityButton] = useState(false);
  const [showActivityData, setShowActivityData] = useState(true);
  const { Title } = Typography;
  const getNewActivity = (data) => {
    setAllActivityData(data);
    setActivityButton(false);
  };
  const activityListHandler = () => {
    setActivityButton(!activityButton);
    setShowActivityData(!showActivityData);
  };
  const deleteActivityStatus = (item) => {
    let id = item.id;
    allActivityData.forEach((i) => {
      if (i.id === id) {
        setAllActivityData(
          allActivityData.filter((activity) => activity.id !== id)
        );
      } else {
        console.log("no such id found");
      }
    });
  };

  // Data From past indexedDb
  const getExistingDataFromDb = (eachBoardItem) => {
    eachBoardItem.task.forEach((element) => {
      if (selectedCardId.id === element.id) {
        if (element.activity) {
          console.log("element-id : ", element.id);
          console.log("selected Id :", selectedCardId.id);
          setAllActivityData(element.activity);
          console.log("getting updated data success");
        }
      } else {
      }
    });
  };

  useEffect(() => {
    getExistingDataFromDb(eachBoardItem);
    console.log('fun is executing')
  }, []);

  return (
    <>
      <div className="project-activity-container">
        <div className="activity-icon-container">
          <UnorderedListOutlined className="icon" />
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
          <PrjCardActivityList
            allActivityData={allActivityData}
            deleteActivityStatus={deleteActivityStatus}
          />
        ) : null
      ) : null}
      <PrjCardActivityForm
        eachBoardItem={eachBoardItem}
        selectedCardId={selectedCardId}
        getNewActivity={getNewActivity}
        allActivityData={allActivityData}
      />
    </>
  );
};

export default PrjCardActivity;
