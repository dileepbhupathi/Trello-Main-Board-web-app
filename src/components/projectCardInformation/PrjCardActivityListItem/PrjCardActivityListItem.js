import "./PrjCardActivityListItem.scss";
import { Typography } from "antd";
import PrjCardActivityActions from "../PrjCardActivityActions/PrjCardActivityActions";
const PrjCardActivityListItem = ({ ActivityItem, deleteActivityStatus }) => {
  const { Text } = Typography;
  return (
    <>
      <div className="activity-status">
        <div className="activity-icon-container">
          <div className="member">s</div>
        </div>

        <div className="activity-status-content">
          <Text level={5}>spandala </Text>
          <Text type="secondary" level={5}>
            today at {ActivityItem.timestamps}
          </Text>
          <br />
          <Text type="secondary" level={5}>
            {ActivityItem.activity}
          </Text>
          <PrjCardActivityActions deleteActivityStatus={deleteActivityStatus} ActivityItem={ActivityItem}/>
          
        </div>
      </div>
    </>
  );
};

export default PrjCardActivityListItem;
