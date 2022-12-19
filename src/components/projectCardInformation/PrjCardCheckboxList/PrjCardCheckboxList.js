import PrjCardCheckbox from "../PrjCardCheckbox/PrjCardCheckbox";
import "./PrjCardCheckboxList.scss";
import { List } from "antd";
const PrjCardCheckboxList = ({ newCheckboxdata, getPercentValue }) => {
  return (
    <div className="project-card-list-of-checkbox">
      {newCheckboxdata.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={newCheckboxdata}
          renderItem={(item) => (
            <List.Item className="checkbox-list-item" key={item.id}>
              <PrjCardCheckbox
                checkboxData={item}
                newCheckboxdata={newCheckboxdata}
                getPercentValue={getPercentValue}
              />
            </List.Item>
          )}
        />
      ) : null}
    </div>
  );
};

export default PrjCardCheckboxList;
