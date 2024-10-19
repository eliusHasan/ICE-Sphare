import '../css/Contact.css';
import Card from 'antd/es/card/Card';
import { EnvironmentOutlined, PhoneOutlined , PrinterOutlined , MailOutlined, LinkOutlined , BankOutlined } from '@ant-design/icons'


const Contact = () => {

    return (
        <div style={{padding:'60px'}}>
            <h1 style={{textAlign:'center'}}>Contact Us</h1>
            <Card className='contact_card' hoverable>
                <h2><strong style={{color: '#D91656'}}><BankOutlined /> </strong>Informatoin and Communication Engineering</h2>
                <h2><strong style={{color: '#D91656'}}><EnvironmentOutlined /> </strong>East Block, 4th Science Building,<br/>University of Rajshahi,<br/>Rajshahi 6205, Bangladesh.</h2>
                <h2><strong style={{color: '#D91656'}}><PhoneOutlined /> </strong>+880 721 711100</h2>
                <h2><strong style={{color: '#D91656'}}><PrinterOutlined />  </strong>+880 721 750064, 711131</h2>
                <h2><strong style={{color: '#D91656'}}><MailOutlined /> </strong>ice@ru.ac.bd</h2>
                <h2><strong style={{color: '#D91656'}}><LinkOutlined /> </strong>www.ru.ac.bd/ice</h2>
            </Card>
        </div>
    );
}

export default Contact;