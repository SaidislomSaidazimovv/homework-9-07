import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import "./index.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { RiAccountPinCircleLine } from "react-icons/ri";
const { Header, Sider, Content } = Layout;

const SiteBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const root = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const arry = [
    {
      icon: (
        <GiTeacher
          style={{
            width: "30px",
            height: "30px",
          }}
        />
      ),
      label: "Teachers",
      key: "/",
    },
    {
      icon: (
        <PiStudentBold
          style={{
            width: "30px",
            height: "30px",
          }}
        />
      ),
      label: "Students",
      key: "/students",
    },
    {
      icon: (
        <RiAccountPinCircleLine
          style={{
            width: "30px",
            height: "30px",
          }}
        />
      ),
      label: "Profile",
      key: "/profile",
    },
  ];
  return (
    <Layout>
      <Sider
        className="header_site"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={arry}
          onClick={(e) => root(e.key)}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className="header_container"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined   /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default SiteBar;
