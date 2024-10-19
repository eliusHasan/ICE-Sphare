import '../css/Teacher.css';
import { Button, Table } from 'antd';
import Profile from './Teacher_Profile'
import Teacher_Profile from './Teacher_Profile';


  
  const columns = [
    {
        title: 'Order',
        dataIndex: 'key',
        key: 'key'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position'
    },
    {
        title: 'Email Address',
        dataIndex: 'email',
        key: 'email'
      },
    {
        title: 'See Details',
        dataIndex: 'detail',
    }
  ];


const Teacher = ({chng_comp}) => {
    const dataSource = [
        {
          key: '1',
          name: 'LAILA NAZNIN',
          position: 'ASSOCIATE PROFESSOR',
          email: 'ln.ice@ru.ac.bd',
          detail: <Button><a onClick={() => chng_comp(<Teacher_Profile/>)}>Details</a></Button>
        },
        {
          key: '2',
          name: 'DR. RUBAIYAT YASMIN',
          position: 'PROFESSOR',
          email: 'sheba@ru.ac.bd',
          detail: <Button>Details</Button>
        },
        {
            key: '3',
            name: 'DR. DIPANKAR DAS',
            position: 'PROFESSOR',
            email: 'dipankar@ru.ac.bd',
            detail: <Button>Details</Button>
        },
        {
            key: '4',
            name: 'DR. AURANGZIB MD. ABDUR RAHMAN',
            position: 'PROFESSOR',
            email: 'amar_ice@ru.ac.bd',
            detail: <Button>Details</Button>
        },
        {
            key: '5',
            name: 'DR. MD. EMDADUL HAQUE',
            position: 'PROFESSOR',
            email: 'haque-ice@ru.ac.bd',
            detail: <Button>Details</Button>
        },
        {
            key: '6',
            name: 'DR. MIRZA A. F. M. RASHIDUL HASAN',
            position: 'PROFESSOR',
            email: 'mirza_ice@ru.ac.bd',
            detail: <Button>Details</Button>
        },
        {
            key: '7',
            name: 'DR. FIROZ AHMED',
            position: 'PROFESSOR',
            email: 'fahmed@ru.ac.bd',
            detail: <Button>Details</Button>
        },
        {
            key: '8',
            name: 'HALIDA HOMYARA',
            position: 'PROFESSOR',
            email: 'halida_ice@ru.ac.bd',
            detail: <Button>Details</Button>
        },
        {
            key: '9',
            name: 'MD. HASNAT KABIR, PhD',
            position: 'PROFESSOR',
            email: 'N/A',
            detail: <Button>Details</Button>
        },
        {
            key: '10',
            name: 'MUHAMMAD SAJJADUR RAHIM',
            position: 'PROFESSOR',
            email: 'sajid_ice@ru.ac.bd',
            detail: <Button>Details</Button>
        },
        {
            key: '11',
            name: 'MD. REAZ HOSSAIN',
            position: 'ASSOCIATE PROFESSOR',
            email: 'reaz@ru.ac.bd',
            detail: <Button>Details</Button>
        },
        {
            key: '12',
            name: 'DR. RIAZ UDDIN MONDAL',
            position: 'ASSOCIATE PROFESSOR',
            email: 'riaz_uddin_mondal@ru.ac.bd',
            detail: <Button>Details</Button>
        },
        
      ];
    return (
        <div className='teacher_container'>
            <h1>Teachers List</h1>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
}

export default Teacher;


  