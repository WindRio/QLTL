import React from "react";
import { Breadcrumb, Typography } from "antd";
import { Link } from "react-router-dom";

import { routePath } from "../../common";

const { Title } = Typography;
const HeaderCpn: React.FC = () => {
  const breadcrumbItems = [
    {
      title: <Link to={routePath.home.url}>{routePath.home.pathName}</Link>,
      key: "home",
    },
  ];
  return (
    <span>
      {/* <Breadcrumb items={breadcrumbItems} />
      <Title level={3}>Vụ án</Title> */}
    </span>
  );
};
export default HeaderCpn;
