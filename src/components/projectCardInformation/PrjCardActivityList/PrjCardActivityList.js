import './PrjCardActivityList.scss'
import { List } from 'antd';
import PrjCardActivityListItem from '../PrjCardActivityListItem/PrjCardActivityListItem';

const PrjCardActivityList = ({allActivityData,deleteActivityStatus}) => {
   
   
   return ( <>
    <List
          itemLayout="horizontal"
          dataSource={allActivityData}
          className='activity-list'
          renderItem={(item) => (
            <List.Item className='activity-list-item'>
              <PrjCardActivityListItem ActivityItem = {item} deleteActivityStatus={deleteActivityStatus}/>
            </List.Item>
          )}
        />
    </> );
}
 
export default PrjCardActivityList;