import './PrjCardActivityActions.scss';
import { BsEmojiSmile } from "react-icons/bs";
import { Typography } from 'antd';
const PrjCardActivityActions = ({deleteActivityStatus,ActivityItem}) => {
    const {Text} = Typography;
    return ( <>
    <div className="activity-status-options-section">
            <span className="activity-status-options-icons">
              <BsEmojiSmile />
            </span>
            <Text type="secondary"> - Edit - </Text>

            <Text
              type="secondary"
              className="deleteButton"
              onClick={() => {
                deleteActivityStatus(ActivityItem);
              }}
            >
              Delete
            </Text>
          </div>
    </> );
}
 
export default PrjCardActivityActions;