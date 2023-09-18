import React, { useState, useEffect } from "react";
import { Breadcrumb } from "antd";
// import { useHooks } from "../../hooks/";

const BreadcrumbCpn: React.FC = (props) => {
  // const { list, handleSetBreadcrumb } = useHooks();
  const { newItem, onFetchData } = props;

  const [breadcrumbItems, setBreadcrumbItems] = useState([
    {
      title: <div onClick={() => handleSelect(0)}>Tài liệu</div>,
      key: "home",
      level: 0,
    },
  ]);

  // let dataCopy;
  let data2 = [
    {
      title: <div onClick={() => handleSelect(0)}>Tài liệu</div>,
      key: "home",
      level: 0,
    },
  ];
  let dataCopy = [
    {
      title: <div onClick={() => handleSelect(0)}>Tài liệu</div>,
      key: "home",
      level: 0,
    },
  ];

  const handleSelect = (level) => {
    const backItem = data2.find((item) => item.level === level);
    const duplicate = [...breadcrumbItems].find((item) => item.level === level);
    if (duplicate) {
      setBreadcrumbItems(dataCopy);
      onFetchData(1);
    } else {
      setBreadcrumbItems([...breadcrumbItems, backItem]);
      onFetchData(newItem.key);
    }
    // console.log(dataCopy,'copy');
    // setBreadcrumbItems(dataCopy);
  };
  useEffect(() => {
    if (newItem.key) {
      const newBreadcrumb = [
        ...breadcrumbItems,
        {
          ...newItem,
          level: breadcrumbItems.length,
          title: (
            <div onClick={() => handleSelect(breadcrumbItems.length)}>
              {newItem.title}
            </div>
          ),
        },
      ];
      setBreadcrumbItems(newBreadcrumb);
      // dataCopy = newBreadcrumb;
      data2.push({
        ...newItem,
        level: breadcrumbItems.length,
        title: (
          <div onClick={() => handleSelect(breadcrumbItems.length)}>
            {newItem.title}
          </div>
        ),
      });
    }
  }, [newItem]);
  return <Breadcrumb items={breadcrumbItems} style={{ cursor: "pointer" }} />;
};
export default BreadcrumbCpn;
