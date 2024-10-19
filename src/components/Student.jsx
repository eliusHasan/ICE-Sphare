import '../css/Student.css';
import { Button, Table } from 'antd';
import Select_Batch from './Select_Batch';

const dataSource = [
    {
      key: '1',
      name: 'SONTOSH KUMAR SHIL',
      id: '1910377101',
      district: 'Thakurgoan',
      detail: <Button>Details</Button>
    },
    {
        key: '2',
        name: 'EKRAMUL ISLAM SHADIK',
        id: '1910777102',
        district: 'Noagoan',
        detail: <Button>Details</Button>
    },
    {
        key: '3',
        name: 'MST. SAHARIA AKTER ',
        id: '1912177103',
        district: 'Pabna',
        detail: <Button>Details</Button>
    },
    {
        key: '4',
        name: 'ASRAFUL AL NOMAN',
        id: '1910877104',
        district: 'Tangail',
        detail: <Button>Details</Button>
    },
    {
        key: '5',
        name: 'MD. HANZILLA KIBRIA SHOHAN',
        id: '1910677105',
        district: 'Barishal',
        detail: <Button>Details</Button>
    },
    {
        key: '6',
        name: 'MD. TOUHIDUL ISLAM',
        id: '1910777106',
        district: 'Pabna',
        detail: <Button>Details</Button>
    },
    {
        key: '7',
        name: 'AHASANUL HUK',
        id: '1910277107',
        district: 'Tangail',
        detail: <Button>Details</Button>
    },
    {
        key: '8',
        name: 'NILOY SANNYAL',
        id: '1911077108',
        district: 'Shylet',
        detail: <Button>Details</Button>
    },
    {
        key: '9',
        name: 'MD. MAHAMUDUL HASAN MOON',
        id: '1910677109',
        district: 'Natore',
        detail: <Button>Details</Button>
    },
    {
        key: '10',
        name: 'HASSAN ABDUN NUR',
        id: '1910477110',
        district: 'Pabna',
        detail: <Button>Details</Button>
    },
    {
        key: '11',
        name: 'MOONTASIR MAHMOOD',
        id: '1910677111',
        district: 'Rajshahi',
        detail: <Button>Details</Button>
    },
    {
        key: '12',
        name: 'HUZZATUL ISLAM',
        id: '1910977112',
        district: 'Noagoan',
        detail: <Button>Details</Button>
    },
    {
        key: '13',
        name: 'ABDULLAH-AL-GHALIB',
        id: '1910977114',
        district: 'Thakurgoan',
        detail: <Button>Details</Button>
    },
    {
        key: '14',
        name: 'MOHAMMAD ABDULLAH IBNEY YOUSUF',
        id: '1910177116',
        district: 'Thakurgoan',
        detail: <Button>Details</Button>
    },
    {
        key: '15',
        name: 'MD. MAHABUB ALAM',
        id: '1910777117',
        district: 'Thakurgoan',
        detail: <Button>Details</Button>
    },
    {
        key: '16',
        name: 'MD SHA ALAM BULBUL',
        id: '1910777118',
        district: 'Pabna',
        detail: <Button>Details</Button>
    },
    {
        key: '17',
        name: 'MD SHAKIB HASAN',
        id: '1910577119',
        district: 'Tangail',
        detail: <Button>Details</Button>
    },
    {
        key: '18',
        name: 'MOTAHER HOSSAIN SHIHAB',
        id: '1910177120',
        district: 'Chandpur',
        detail: <Button>Details</Button>
    },
    {
        key: '19',
        name: 'MD NAHIMUL ISLAM',
        id: '1911077121',
        district: 'Rangpur',
        detail: <Button>Details</Button>
    },
    {
        key: '20',
        name: 'SABBIR HOSSAIN',
        id: '1911077122',
        district: 'Pabna',
        detail: <Button>Details</Button>
    },
    
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
        title: 'ID',
        dataIndex: 'id',
        key: 'id'
    },
    {
      title: 'Home District',
      dataIndex: 'district',
      key: 'district'
    },
    {
        title: 'See Details',
        dataIndex: 'detail',
    }
  ];


const Student = () => {
    return (
        <div className='Student_container'>
            <h1>Students List</h1>
            <Select_Batch/>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
}

export default Student;


  