import React from "react";
import { Card, Tooltip } from "antd";
import { FolderOpenOutlined, MoreOutlined } from "@ant-design/icons";
import TooltipOption from "./Tooltip/TooltipOption.jsx";

// interface Props {
//     id: number;
//     name: string;
// }

const FolderCard: React.FC = (props) => {
  const {
    id,
    name,
    onAddBreadcrumb,
    onOpenEditModal,
    onOpenMoveModal,
    onOpenDelModal,
  } = props;
  const handleClick = () => {
    onAddBreadcrumb(id, name);
  };
  return (
    <Card style={{ width: "18%", margin: "4px", cursor: "pointer" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FolderOpenOutlined />
        <span onClick={handleClick}>{name}</span>
        <Tooltip
          // trigger="click"
          title={
            <TooltipOption
              onEditFolder={onOpenEditModal}
              onMove={onOpenMoveModal}
              onDeleteItem={onOpenDelModal}
            />
          }
          color="white"
          placement="topLeft"
        >
          <MoreOutlined />
        </Tooltip>
      </div>
    </Card>
  );
};

export default FolderCard;
