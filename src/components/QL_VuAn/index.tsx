import React, { useState, useEffect } from "react";
import { Button, Tooltip, Col, Row, message } from "antd";
import { FolderAddOutlined, UnorderedListOutlined } from "@ant-design/icons";

import BreadcrumbCpn from "./Breadcrumb";
import CollapseCpn from "./Collapse";
import TooltipAdd from "./Tooltip/TooltipAdd.jsx";
import DelModal from "./Modal/DelModal.jsx";
import FolderModal from "./Modal/FolderModal.jsx";
import MoveModal from "./Modal/MoveModal.jsx";
import { FolderApi } from "../../apis";
import "./index.scss";

const QlvaCpn: React.FC = () => {
  const [addBreadcrumb, setAddBreadcrumb] = useState({});
  const [isOpenDelModal, setIsOpenDelModal] = useState(false);
  const [isOpenAddModal, setIsOpenFolderModal] = useState(false);
  const [isOpenMoveModal, setIsOpenMoveModal] = useState(false);
  const [itemEdit, setItemEdit] = useState(null);
  const [itemDel, setItemDel] = useState(null);
  const [idParent, setIdParent] = useState(null);
  const [currentLocalName, setCurrentLocalName] = useState("");
  const [listData, setListData] = useState([]);
  const [listDataMove, setListDataMove] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();
  const handleAddBreadcrumb = (id, name) => {
    setAddBreadcrumb({ key: id, title: name });
    setIdParent(id);
    fetchData(id);
    setItemEdit(null);
  };

  const handleOpenDelModal = (data) => {
    setIsOpenDelModal(true);
    setItemDel(data);
  };
  async function delItem() {
    try {
      let res;
      if (itemDel.type === "folder") {
        res = await FolderApi.delFolder(null, null, {
          folderId: [itemDel.id],
        });
      } else {
        res = await FolderApi.delFiles(null, null, {
          fileId: [itemDel.id],
        });
      }
      if (res.message !== undefined) {
        setIsOpenDelModal(false);
        setItemDel(null);
        messageApi.success("Delete OK!");
        fetchData(idParent);
      } else {
        messageApi.warning("Khong co gi");
      }
    } catch (error) {
      console.log(error.errorMessage);
      messageApi.warning("Khong co gi");
    }
  }
  const handleDelete = () => {
    delItem();
  };

  const handleOpenAddModal = () => {
    setIsOpenFolderModal(true);
  };

  const handleOpenEditModal = (data) => {
    setIsOpenFolderModal(true);
    setItemEdit(data);
  };
  const handleCloseModal = () => {
    setIsOpenDelModal(false);
    setIsOpenFolderModal(false);
    setIsOpenMoveModal(false);
    setItemEdit(null);
  };

  async function fetchAddFolder(name) {
    try {
      const res = await FolderApi.addFolder(null, null, {
        name: name,
        type: "folder",
        url: null,
        folderIdParent: idParent,
      });
      if (res.status) {
        fetchData(idParent);
        setIsOpenFolderModal(false);
        messageApi.success("Add OK!");
      } else {
        messageApi.warning("Khong co gi");
      }
    } catch (error) {
      console.log(error.errorMessage);
      messageApi.warning("Khong co gi");
    }
  }
  async function fetchEditFolder(name) {
    try {
      let res;
      if (itemEdit?.type === "folder") {
        res = await FolderApi.editFolder({ id: itemEdit?.id }, null, {
          name: name,
          type: itemEdit?.type,
          url: null,
          folderIdParent: idParent,
        });
      } else {
        res = await FolderApi.editFile({ id: itemEdit?.id }, null, {
          name: name,
          type: itemEdit?.type,
          url: null,
          folderIdParent: idParent,
        });
      }
      if (res.status) {
        fetchData(idParent);
        setIsOpenFolderModal(false);
        messageApi.success("Edit OK!");
      } else {
        messageApi.warning("Khong co gi");
      }
    } catch (error) {
      console.log(error.errorMessage);
      messageApi.warning("Khong co gi");
    }
  }

  const handleFolder = (name) => {
    if (itemEdit !== null) {
      fetchEditFolder(name);
    } else {
      fetchAddFolder(name);
    }
    setItemEdit(null);
  };
  async function fetchData(folder) {
    try {
      setIdParent(folder);
      const res = await FolderApi.getData({ id: folder }, null, null);
      if (res.status) {
        setListData(res.content.arrayListItem);
        messageApi.success("Fetch OK!");
      } else {
        messageApi.warning("Khong co gi");
      }
    } catch (error) {
      console.log(error.errorMessage);
    }
  }
  const fetchUpload = async (info) => {
    try {
      const itemUpload = new FormData();
      if (info.file.status !== "uploading") {
        itemUpload.append("file", info.file.originFileObj);
        await FolderApi.uploadFile({ id: idParent }, null, itemUpload);
      }
      fetchData(idParent);
    } catch (error) {
      message.error(error.message);
    }
  };

  const handleMove = (data) => {
    fetchMove(data);
    setIsOpenMoveModal(false);
  };

  const handleOpenMoveModal = (data) => {
    setIsOpenMoveModal(true);
    setItemEdit(data);
    fetchDataMove(1, data);
  };
  async function fetchMove(data) {
    try {
      console.log(itemEdit.type);
      const res = await FolderApi.move({ id: data.idCurrent }, null, {
        folderIdParent: data.idParent,
        type: itemEdit.type === "folder" ? "folder" : "file",
      });
      console.log("🚀 ~ file: index.tsx:166 ~ fetchMove ~ res:", res);
      if (res.status) {
        message.success("Fetch OK!");
        fetchData(idParent);
      } else {
        message.warning("Khong co gi");
      }
    } catch (error) {
      console.log(error.errorMessage);
    }
  }

  async function fetchDataMove(folder, folderMove) {
    try {
      const res = await FolderApi.getData({ id: folder }, null, null);
      if (res.status) {
        const AllFolder = res.content.arrayListItem.filter(
          (item) => item.type === "folder" && item.id !== folderMove.id
        );
        setListDataMove(AllFolder);
        message.success("Fetch OK!");
      } else {
        message.warning("Khong co gi");
      }
    } catch (error) {
      console.log(error.errorMessage);
    }
  }

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <>
      {contextHolder}
      <>
        <MoveModal
          isModalOpen={isOpenMoveModal}
          onCancel={handleCloseModal}
          data={itemEdit}
          currentLocalName={currentLocalName}
          onConfirm={handleMove}
          listData={listDataMove}
          onFetchData={fetchDataMove}
        />
        <DelModal
          isModalOpen={isOpenDelModal}
          onCancel={handleCloseModal}
          onConfirm={handleDelete}
          data={itemDel}
        />
        <FolderModal
          isModalOpen={isOpenAddModal}
          itemEdit={itemEdit}
          onCancel={handleCloseModal}
          onConfirm={handleFolder}
        />
      </>
      <Row style={{ padding: "1%" }}>
        <Col span={18}>
          <BreadcrumbCpn newItem={addBreadcrumb} onFetchData={fetchData} />
        </Col>
        <Col span={6} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Tooltip
            // trigger="click"
            title={
              <TooltipAdd
                onOpenAddModal={handleOpenAddModal}
                onUpload={fetchUpload}
              />
            }
            color={"white"}
            placement="leftTop"
          >
            <Button icon={<FolderAddOutlined />} />
          </Tooltip>
          <Tooltip title="Test">
            <Button icon={<UnorderedListOutlined />} />
          </Tooltip>
        </Col>
      </Row>
      <div>
        <CollapseCpn
          data={listData}
          onOpenEditModal={handleOpenEditModal}
          onAddBreadcrumb={handleAddBreadcrumb}
          onOpenMoveModal={handleOpenMoveModal}
          onOpenDelModal={handleOpenDelModal}
        />
      </div>
    </>
  );
};

export default QlvaCpn;
