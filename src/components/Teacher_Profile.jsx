import { Button, Card, Flex } from 'antd';
import '../css/Teacher_Profile.css';
import laila from "../img/laila.PNG";

// const data = [
//     '1. Laila Naznin, Shaikh Enayet Ullah "Secured Audio Signal Transmission in Hybrid Prefixing Scheme Implemented Multicarrier CmWave Wireless Communication System" Advances in Wireless Communications and Networks. Vol. 4, No. 2, 2018, pp. 30-35. doi: 10.11648/j.awcn.20180402.11, October 2018',
//     '2. Laila Naznin, Md. Reaz Hossain & Shaikh Enayet Ullah "1. “Encrypted Color Image Transmission in LDPC Encoded MIMO Wireless Communication System with implementation of MP-WFRFT Based”" Global Journal of Computer Science and Technology: A Hardware & Computation Volume 17 Issue 1 Version 1.0 Year 2017 Type: Double Blind Peer Reviewed International Research Journal Publisher: Global Journals Inc. (USA) Online ISSN: 0975-4172 & Print ISSN:,January 2017',
//     '3. Laila Naznin, Shahrina Sultana, M. Golam Rashed and Shaikh Enayet Ullah "2. “SECURED TEXT MESSAGE TRANSMISSION IN PRE-CHANNEL EQUALIZATION BASED MIMO-OFDM SYSTEM WITH IMPLEMENTATION OF CONCATENATED ECB AND CFB CRYPTOGRAPHIC ALGORITHM”" International Journal of Network Security & Its Applications (IJNSA), Vol.4, No.5, September 2012',
//   ];

const Teacher_Profile = () => {

    return (
        <div>
            <h1>Profile</h1>
            <Card className='profile_container'>
                <Flex>
                <img src={laila} alt="Profile"  />
                <div style={{padding:'20px 60px'}}>
                    <h2>Name: <span style={{color: 'green'}}>LAILA NAZNIN</span></h2>
                    <h2>Position: <span style={{color: 'green'}}>ASSOCIATE PROFESSOR</span></h2>
                    <h2>Department: <span style={{color: 'green'}}>Information & Communication Engineering</span></h2>
                    <h2>Education Summary: <span style={{color: 'green'}}>B.Sc. (Raj) & M.Sc. (Raj)</span></h2>
                    <h2>Research Interest: <span style={{color: 'green'}}>Wireless Communication, IoT</span></h2>
                    <h2>Email: <span style={{color: 'green'}}>ln.ice@ru.ac.bd</span></h2>
                    <h2>Journal: <span style={{color: 'green'}}>
                    <Button type='primary' style={{marginBottom:'20px'}}>See Journals</Button>
                    {/* <List
                        size="large"
                        bordered
                        dataSource={data}
                        renderItem={item => <List.Item>{item}</List.Item>}
                        />     */}
                    </span></h2>
                </div>
                </Flex>
            </Card>
        </div>
    )
}

export default Teacher_Profile;