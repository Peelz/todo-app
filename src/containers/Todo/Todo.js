import { Button, Table } from "antd";
import Layout from "antd/lib/layout/layout";
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
        {/* <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span> */}
      </div>
      <Table dataSource={items} columns={columns}></Table>
    </>
  );
};

export default Todo;
