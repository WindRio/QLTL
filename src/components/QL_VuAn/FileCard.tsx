import React from "react";
import { Card } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

// interface Props {
//     id: number;
//     name: string;
// }

const FileCard: React.FC = (props) => {
  const { data, onOpenEditModal, onOpenMoveModal, onOpenDelModal } = props;
  // const handleClick = () => {
  //     onAddBreadcrumb(id, name);
  // };
  return (
    <Card
      style={{ width: 200, marginTop: "6px", marginRight: "14px" }}
      cover={<img alt="Image" src={data.url} style={{ height: 260 }} />}
      actions={[
        <EditOutlined key="edit" onClick={onOpenEditModal} />,
        <LogoutOutlined key="move" onClick={onOpenMoveModal} />,
        <DeleteOutlined key="delete" onClick={onOpenDelModal} />,
      ]}
    >
      <Card.Meta title={data.name} />
    </Card>
  );
};

export default FileCard;
