
import {HomeOutlined,ContactsOutlined,FileOutlined ,CalendarOutlined, NotificationOutlined,InfoCircleOutlined} from "@ant-design/icons"
import '../css/Nav.css';
import { Menu } from "antd";
import Top from './Top';
import Hero from './Hero';
import Teacher from './Teacher';
import Student from './Student';
import Staff from './Staff';
import Materials from "./Materials";
import Events from './Events';
import Notice from './Notice';
import Contact from './Contact';



  const Nav = ({ chng_comp }) => {
    const items = [
      {
        key : '1',
        icon: <HomeOutlined/>,
        label: <a onClick={() => chng_comp(<Hero/>)}>Home</a>
      },
      {
        key: '2',
        icon: <ContactsOutlined />,
        label: 'Community',
        children: [
          {
            key: '2-1',
            label: <a onClick={() => chng_comp(<Teacher chng_comp={chng_comp}/>)}>Teachers</a>
          },
          {
            key: '2-2',
            label: <a onClick={() => chng_comp(<Student/>)}>Students</a>
            // children: [
            //   {
            //     key: '2-2-1',
            //     label: 'Present',
            //   },
            //   {
            //     key: '2-2-2',
            //     label: 'Alumni'
            //   }
            // ]
          },
          {
            key: '2-3',
            label: <a onClick={() => chng_comp(<Staff/>)}>Staffs</a>
          }
        ],
      },
      {
        key: '3',
        icon: <FileOutlined />,
        label: <a onClick={() => chng_comp(<Materials/>)}>Materials</a>
      },
      {
        key: '4',
        icon: <CalendarOutlined />,
        label: <a onClick={() => chng_comp(<Events/>)}>Events</a>
      },
      {
        key: '5',
        icon: <NotificationOutlined />,
        label: <a onClick={() => chng_comp(<Notice/>)}>Notices</a>
      },
      {
        key: '6',
        icon: <InfoCircleOutlined />,
        label: <a onClick={() => chng_comp(<Contact/>)}>Contact</a>
      }
    ]
    return(
        <Menu
          mode='vertical'
          items={items}
          className="menu"
        />
    );
  }

export default Nav;





