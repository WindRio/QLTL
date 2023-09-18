import React, { useEffect, useState } from 'react'
import { Modal, List, Tabs, Radio, message, Button } from 'antd';
import { ArrowRightOutlined } from "@ant-design/icons";
import { FolderApi } from "../../../apis";

const MoveModal = ({ onConfirm, onCancel, isModalOpen, data, listData, onFetchData, currentLocalName }) => {
    const [valueRadio, setValueRadio] = useState(null);
    const [idCurrent, setIdCurrent] = useState(null);
    const [idParent, setIdParent] = useState(null);
    const onChangeRadio = (e) => {
        setValueRadio(e.target.value);
    };
    const TabItems = [
        {
            key: '1',
            label: 'Di chuyển tới',
            children: <>
                <Radio.Group onChange={onChangeRadio} value={valueRadio} style={{ width: "100%" }}>
                    <List itemLayout="horizontal"
                        dataSource={listData}
                        renderItem={(item, index) => (
                            <List.Item key={index} actions={[<Button icon={<ArrowRightOutlined onClick={() => handleFetchData(item.id, data.id)} />} />]}>
                                <Radio value={item.id}>{item.name}</Radio>
                            </List.Item>)}
                    />
                </Radio.Group>
            </>,
        },
    ];
    const handleConfirm = () => {
        if (valueRadio) {
            onConfirm({ idCurrent, idParent: valueRadio })
        } else {
            console.log(idCurrent, idParent)
            if (idCurrent === null || idParent === null) {
                message.warning("Chọn vị trí muốn chuyển")
            } else {
                onConfirm({ idCurrent, idParent })
            }
        }
    }
    const handleCancel = () => {
        setIdCurrent(null)
        setIdParent(null)
        setValueRadio(null)
        onCancel()
    }
    const handleFetchData = (parent, child) => {
        onFetchData(parent, child)
        setIdCurrent(child)
        setIdParent(parent)
    }
    useEffect(() => {
        if (data) {
            setIdCurrent(data.id)
        }
    }, [data])
    return (
        <>
            <Modal title={`Di chuyển ${data?.name}`} open={isModalOpen} onOk={handleConfirm} onCancel={handleCancel}>
                {/* <p>{`Vị trí hiện tại: {currentLocalName}`} </p> */}
                <Tabs defaultActiveKey="1" items={TabItems} />
            </Modal>
        </>)
}
export default MoveModal;