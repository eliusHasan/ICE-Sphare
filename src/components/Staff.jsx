import '../css/Staff.css';
import { Button, Table } from 'antd';

const dataSource = [
    {
      key: '1',
      name: 'MD. RASAL UDDIN',
      position: 'COMPUTER OPERATION SUPERVISOR',
      number: '01755800059',
      detail: <Button>Details</Button>
    },
    {
        key: '2',
        name: 'MD. ABU BAKKAR',
        position: 'SECTION OFFICER',
        number: '01755800059',
        detail: <Button>Details</Button>
    },
    {
        key: '3',
        name: 'MD. SHAHEEN ASHRAF',
        position: 'SECTION OFFICER',
        number: '01755800059',
        detail: <Button>Details</Button>
    },
    {
        key: '4',
        name: 'MD. SHOHIDUL ISLAM',
        position: 'SENIOR ASSISTANT EQV.',
        number: '01755800059',
        detail: <Button>Details</Button>
    },
    {
        key: '5',
        name: 'NIROD KANTI MONDAL',
        position: 'LD ASSISTANT EQV.',
        number: '01755800059',
        detail: <Button>Details</Button>
    },
    {
        key: '6',
        name: 'MD. ATAUR RAHMAN',
        position: 'Ld Assistant Eqv.',
        number: '01755800059',
        detail: <Button>Details</Button>
    },
    {
        key: '7',
        name: 'MD. ZIAUR RAHMAN',
        position: 'OFFICE ASSISTANT',
        number: '01755800059',
        detail: <Button>Details</Button>
    }
    
  ];
  
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
        title: 'Mobile Number',
        dataIndex: 'number',
        key: 'email'
      },
    {
        title: 'See Details',
        dataIndex: 'detail',
    }
  ];


const Staff = () => {
    return (
        <div className='Staff_container'>
            <h1>Staffs List</h1>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
}

export default Staff;


  