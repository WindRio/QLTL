import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

// import { dataTest } from "./mockup";
import FolderCard from "./FolderCard";
import FileCard from "./FileCard";

const CollapseCpn: React.FC = (props) => {
  const {
    onAddBreadcrumb,
    onOpenEditModal,
    onOpenMoveModal,
    onOpenDelModal,
    data,
  } = props;
  let FolderElm;
  let FileElm;
  if (data.length !== 0) {
    // folder
    FolderElm = data.map((item) => {
      if (item.type === "folder") {
        return (
          <FolderCard
            id={item.id}
            name={item.name}
            key={item.id}
            onAddBreadcrumb={onAddBreadcrumb}
            onOpenEditModal={() => onOpenEditModal(item)}
            onOpenMoveModal={() => onOpenMoveModal(item)}
            onOpenDelModal={() => onOpenDelModal(item)}
          />
        );
      }
    });
    //file
    FileElm = data.map((item) => {
      if (item.type !== "folder") {
        return (
          <FileCard
            data={item}
            key={item.id}
            onOpenEditModal={() => onOpenEditModal(item)}
            onOpenMoveModal={() => onOpenMoveModal(item)}
            onOpenDelModal={() => onOpenDelModal(item)}
          />
        );
      }
    });
  }

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Thư mục",
      children: (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {FolderElm}
        </div>
      ),
    },
    {
      key: "2",
      label: "Tệp",
      children: (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {FileElm}
        </div>
      ),
    },
  ];
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1", "2"]} onChange={onChange} />
  );
};

export default CollapseCpn;
