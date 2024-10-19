import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';



const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



const Log_In_Form = () => (
    <>
    <h1>Log In Form</h1>
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
        label="ID"
        name="id"
        rules={[
          { required: true, message: 'Please input your ID!' },
          { type: 'number', min: 10, message: 'ID must be 10 digit!' }
        ]}
      >
        <InputNumber maxLength={10} min={0} style={{width: '100%'}}/>
    </Form.Item>

    <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please input your password!' },
          { min: 8, message: 'Password must be at least 8 characters long!' }
        ]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>


    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Log In
      </Button>
    </Form.Item>
  </Form></>
);
export default Log_In_Form;