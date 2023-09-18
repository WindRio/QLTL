import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import MenuCpn from "../Menu";
import HeaderCpn from "./HeaderCpn";
import "./index.scss";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => (
  <Layout style={{ height: "100vh" }}>
    <Sider className="layout-sider">
      <MenuCpn />
    </Sider>
    <Layout>
      <Header className="layout-header">
        <HeaderCpn />
      </Header>
      <Content style={{overflow: "auto"}}>
        <Outlet />
      </Content>
    </Layout>
  </Layout>
);
export default App;
