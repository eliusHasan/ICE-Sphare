import { Affix, Flex, Layout } from 'antd';
import 'antd/dist/reset.css';
import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Student_Profile from './components/Student_Profile';
import Top from './components/Top';


const { Header, Footer, Content , Sider } = Layout;


const App = () => {
  const [Component, setComponent] = useState(<Hero/>);
  const changeComponent = (comp) => {
    setComponent(comp);
    console.log(comp);
    
  }
  return (
  <>
    <Layout style={{width:'100%',height:'100vh'}}>
      <Affix><Sider className='sider'><Nav chng_comp={changeComponent}/></Sider></Affix>
      
      <Layout className='layout_right'>
        <Affix><Header><Top chng_comp={changeComponent}/></Header></Affix>
        <Flex vertical>
          <Content className='content'>
            {Component}
            <Student_Profile/>
          </Content>
        </Flex>
        <Footer className='footer'>All rights reserved © 2024, Dept. of Information & Communication Engineering. Powered by ICT Center, RU.</Footer>
      </Layout>
    </Layout>
  </>
);
}
export default App;