import { Card, Flex } from 'antd';
import '../css/Student_Profile.css';
import elius from "../img/profile2.jpg";



const Student_Profile = () => {

    return (
        <div>
            <h1>Student Profile</h1>
            
            <Card className='std_profile_container'>
                <Flex>
                <img src={elius} alt="Profile"  />
                <div style={{padding:'20px'}}>
                    <h2>Name: <span style={{color: 'green'}}>Md. Elius Hasan</span></h2>
                    <h2>ID: <span style={{color: 'green'}}>1910977128</span></h2>
                    <h2>Session: <span style={{color: 'green'}}>2018-2019</span></h2>
                    <h2>Email: <span style={{color: 'green'}}>ln.ice@ru.ac.bd</span></h2>
                    <h2>Contact Number: <span style={{color: 'green'}}>01737982792</span></h2>
                    <h2>Workplace: <span style={{color: 'green'}}>ICE, RU</span></h2>
                    <h2>FB ID: <span style={{color: 'green'}}>https://www.facebook.com/elius.hasan.35</span></h2>
                    <h2>Address: <span style={{color: 'green'}}>Sirajganj</span></h2>
                </div>
                </Flex>
            </Card>
        </div>
    )
}

export default Student_Profile;