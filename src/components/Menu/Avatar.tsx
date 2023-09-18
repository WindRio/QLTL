import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Avatar, Card, Skeleton, Switch } from "antd";

const { Meta } = Card;

const App: React.FC = () => {
  return (
    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
      <Meta
        avatar={
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        }
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};
