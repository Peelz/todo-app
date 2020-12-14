import { Button, notification, Table } from "antd";
import Layout from "antd/lib/layout/layout";
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const getMockData = () => [
  {
    name: "Home Work",
  },
  {
    name: "Coding",
  },
  {
    name: "Take shower",
  },
];
const Todo = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    onFecthList();
  }, []);

  const onCreate = () => {};
  const onUpdate = () => {};
  const onDestroy = () => {};
  const onFecthList = () => {
    setItems(getMockData());
  };
  const onHealthCheck = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_SERVICE_URL + "/health-check"
      );
      if (response.status === 200) {
        notification.success({ message: "Healthy" });
      } else {
        throw Error("Service response is invalid format");
      }
    } catch (e) {
      notification.error({ message: "Service Not Healthy" });
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      render: () => <Button>Update</Button>,
    },
  ];

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={onCreate}>
          Create
        </Button>
        <Button
          style={{ marginLeft: 12 }}
          type="primary"
          onClick={onHealthCheck}
        >
          Health Check
        </Button>
        {/* <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span> */}
      </div>
      <Table dataSource={items} columns={columns}></Table>
    </>
  );
};

export default Todo;
