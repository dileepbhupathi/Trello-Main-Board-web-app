import React from "react";
import "./PrjCardProgress.scss";
import { Progress } from "antd";
const PrjCardProgress = ({ percent }) => {
  

  
  return (
    <div className="Project-card-progress-section">
      <Progress percent={percent} />
    </div>
  );
};

export default PrjCardProgress;
