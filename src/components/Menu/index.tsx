import React from "react";
import { useNavigate } from "react-router-dom";
import { PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import { routePath } from "../../common/path";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    `${routePath.layout.pathName}`,
    `${routePath.layout.url}`,
    <PieChartOutlined />
  ),
];

const MenuCpn: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
    console.log("click ", e);
  };

  return (
    <Menu
      mode="inline"
      onClick={onClick}
      items={items}
      defaultSelectedKeys={[`${routePath.layout.pathName}`]}
    />
  );
};

export default MenuCpn;
