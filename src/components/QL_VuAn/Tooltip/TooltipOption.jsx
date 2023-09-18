import { Button } from "antd";
import { FormOutlined, LogoutOutlined, DeleteOutlined } from "@ant-design/icons";

const TooltipAdd = ({ onEditFolder, onMove, onDeleteItem }) => {

    return (
        <>
            <Button icon={<FormOutlined />} style={{ marginBottom: 2 }} block={true} onClick={onEditFolder}>
                Đổi tên
            </Button>
            <Button icon={<LogoutOutlined />} block={true} style={{ marginBottom: 2 }} onClick={onMove}>
                Di chuyển
            </Button>
            <Button icon={<DeleteOutlined />} block={true} onClick={onDeleteItem}>
                Xóa
            </Button>
        </>
    )
}

export default TooltipAdd