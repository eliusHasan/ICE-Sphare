import "../css/Notice.css";
import { Table, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const dataSource = Array.from({
    length: 46,
  }).map((_, i) => ({
    key: i,
    date: '12 January, 2024',
    title: `government holiday on the occasion of Buddha Purnima ${i+1}`,
    download: <Button><DownloadOutlined/></Button>
  }));
  
  const columns = [
    {
        title: 'Date of Publication',
        dataIndex: 'date',
        key: 'date'
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

const Notice = () => {
    return (
        <div className="Notice_container">
            <h1>Notices</h1>
            <Table className="Material_Table" dataSource={dataSource} columns={columns} />
        </div>
    );
}

export default Notice;

  
  