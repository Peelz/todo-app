import React from "react";
import AuthenContext from "../context/Authen";
import Routes from "./Router";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Breadcrumb } from "antd";

const { Content, Header } = Layout;

/**
 * App factory to initial dependencies
 *
 * @param {*} props
 */
const App = () => (
  <div className="App">
    <Layout>
      <Header></Header>
      <Content>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Todo</Breadcrumb.Item>
        </Breadcrumb>
        <Routes />
      </Content>
    </Layout>
    {/* <AuthenContext.Provider value={{}}> */}
    {/* </AuthenContext.Provider> */}
  </div>
);

export default App;
