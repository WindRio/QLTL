import React, { useEffect, useState } from 'react'
import { Modal, Input } from 'antd';

const FolderModal = ({ onConfirm, onCancel, isModalOpen, itemEdit }) => {

    const [inputVal, setInputVal] = useState('')
    const handleConfirm = () => {
        onConfirm(inputVal)
        setInputVal('')
    }
    const handleCancel = () => {
        onCancel()
        setInputVal('')
    }
    useEffect(() => {
        if (itemEdit) {
            setInputVal(itemEdit.name)
        }
    }, [itemEdit])
    return (
        <>
            <Modal title={itemEdit ? "Đổi tên" : "Thêm thư mục"} open={isModalOpen} onOk={handleConfirm} onCancel={handleCancel}>
                <Input placeholder="Tên thư mục" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
            </Modal>
        </>)
}
export default FolderModal;