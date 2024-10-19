import { UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, InputNumber, Select, Upload, message } from 'antd';
import { useState } from 'react';



const plainOptions = ['As a Teacher', 'As a Student'];
const CheckboxGroup = Checkbox.Group;
const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
const option = [];

for (let i = 0; i < 24; i++) {
  if(i<10) {
    option.push({value: `200${i}_200${i+1}`,label: `200${i}_200${i+1}`});
  }
  else
  option.push({value: `20${i}_20${i+1}`,label: `20${i}_20${i+1}`})
}

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = (values) => {
  console.log(values);
};







const Register_Form = () => {
    const [fileList, setFileList] = useState([]);
    const handleChange = (info) => {
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
        setFileList(info.fileList);
      };
    
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        return isJpgOrPng;
    };
    return (
      <><h1>Register Form</h1>
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <CheckboxGroup options={plainOptions} />
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>


    <Form.Item
        label="ID"
        name="id"
        rules={[
          { required: true, message: 'Please input your ID!' },
          { type: 'number', min: 0, message: 'ID must be a positive number!' }
        ]}
      >
        <InputNumber min={0} style={{width: '100%'}}/>
    </Form.Item>


    <Form.Item
      name={['user', 'session']}
      label="Session"
    >
      <Select
        showSearch
        placeholder="Select Session"
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={option}
        />
    </Form.Item>


    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          { pattern: /^\d{11}$/, message: 'Phone number must be 11 digits!' }
        ]}
      >
        <Input 
          placeholder="Enter your phone number" 
          maxLength={11} // Limit to 10 digits
        />
      </Form.Item>

    <Form.Item name={['user', 'address']} label="Address">
      <Input.TextArea />
    </Form.Item>


    <Form.Item name={['user', 'workplace']} label="Workplace">
      <Input />
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
    label="Upload Profile Picture"
    name="profile_picture"
    >
      <Upload
          fileList={fileList}
          onChange={handleChange}
          beforeUpload={beforeUpload}
          showUploadList={{
            showPreviewIcon: true,
            showRemoveIcon: true,
          }}
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
    </Form.Item>


    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      
    </Form.Item>
  </Form></>
)};
export default Register_Form;