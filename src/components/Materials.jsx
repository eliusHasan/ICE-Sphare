import "../css/Materials.css";
import { Table, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Select_semister from "./Select_semister";

const dataSource = Array.from({
    length: 46,
  }).map((_, i) => ({
    key: i,
    s_n: `${i+1}`,
    title: `Data Structure and Algorithm ${i+1}`,
    download: <Button><DownloadOutlined/></Button>
  }));
  
  const columns = [
    {
        title: 'S/N',
        dataIndex: 's_n',
        key: 's_n'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
        title: 'Download',
        dataIndex: 'download',
        key: 'download'
    }
  ];

const Materials = () => {
    return (
        <div className="Material_container">
            <h1>Materials</h1>
            <Select_semister/>
            <Table className="Material_Table" dataSource={dataSource} columns={columns} />;
        </div>
    );
}

export default Materials;

  
  