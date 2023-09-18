import React, { useEffect, useState } from 'react'
import { Modal } from 'antd';

const ModalDelete = ({ title, onConfirm, onCancel, isModalOpen, data }) => {
    const [contentElm, setContentElm] = useState('')
    useEffect(() => {
        if (data?.type === "folder") {
            setContentElm("folder")
        } else {
            setContentElm("file")
        }
    }, [data])
    return (
        <>
            <Modal title={title} open={isModalOpen} onOk={onConfirm} onCancel={onCancel}>
                <p>{`Bạn có muốn xóa ${contentElm} ${data?.name} không?`}</p>
            </Modal>
        </>)
}
export default ModalDelete;