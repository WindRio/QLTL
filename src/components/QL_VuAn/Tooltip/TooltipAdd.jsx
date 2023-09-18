import { Button, Upload, } from "antd";
import { FolderAddOutlined, UploadOutlined } from "@ant-design/icons";



const TooltipAdd = ({ onOpenAddModal, onUpload }) => {
    const uploadProps = {
        name: 'file',
        onChange(info) {
            onUpload(info)
        },
        progress: {
            showInfo: false,
        }
    };
    return (
        <>
            <Button icon={<FolderAddOutlined />} style={{ marginBottom: 2 }} block={true} onClick={onOpenAddModal}>
                Tạo thư mục
            </Button>
            <Upload {...uploadProps} style={{ width: "100%" }} maxCount={1} showUploadList={false}>
                <Button icon={<UploadOutlined />} block={true}>
                    Tải lên tệp
                </Button>
            </Upload>
        </>
    )
}

export default TooltipAdd