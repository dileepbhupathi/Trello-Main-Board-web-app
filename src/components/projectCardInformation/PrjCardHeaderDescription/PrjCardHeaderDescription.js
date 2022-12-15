import "./PrjCardHeaderDescription.scss";
import React from 'react';
import { Typography } from "antd";
import PropTypes from "prop-types";
import Link from "antd/es/typography/Link";
const PrjCardHeaderDescription = ({projectCardHeaderDescription,projectCardHeaderDescriptionLink,header}) => {
    const {Text} = Typography;
  return <div className="prj-card-description">
    <Text >{header}
        <Link className="description-link-tag" type="secondary" underline href={projectCardHeaderDescriptionLink}>
            {projectCardHeaderDescription}
        </Link>
    </Text>
  </div>;
};

export default PrjCardHeaderDescription;

PrjCardHeaderDescription.propType = {
header:PropTypes.string.isRequired,
}
PrjCardHeaderDescription.defaultProps = {
    header:'in list '
}