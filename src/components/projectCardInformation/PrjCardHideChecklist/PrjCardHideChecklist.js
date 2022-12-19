import "./PrjCardHideChecklist.scss";
import { Button, Space } from "antd";

const PrjCardHideChecklist = ({
  newCheckboxdata,
  hideCheckedItemsHandler,
  showCheckedItemsHandler,
  hide,
 
}) => {
  return (
    <Space className="project-hide-checklist">
        
      {newCheckboxdata.lenght > 0 ? null:
      (hide === false ? 
      (<Button type="text" onClick={hideCheckedItemsHandler}>
          Hide checklist
        </Button>) 
        : 
        (<Button type="text" onClick={showCheckedItemsHandler}>
          Show checklist
        </Button>))}

    
    </Space>
  );
};

export default PrjCardHideChecklist;
