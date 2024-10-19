import React from 'react';
import { Select } from 'antd';
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};
const Select_semister = () => (
  <>
    <h2>Select Semister : <Select
    showSearch
    placeholder="Select Semister"
    optionFilterProp="label"
    onChange={onChange}
    onSearch={onSearch}
    options={[
      {
        value: '1_1',
        label: '1_1',
      },
      {
        value: '1_2',
        label: '1_2',
      },
      {
        value: '2_1',
        label: '2_1',
      },
      {
        value: '2_2',
        label: '2_2',
      },
      {
        value: '3_1',
        label: '3_1',
      },
      {
        value: '3_2',
        label: '3_2',
      },
      {
        value: '4_1',
        label: '4_1',
      },
      {
        value: '4_2',
        label: '4_2',
      },
    ]}
  /></h2>
  
  </>
);
export default Select_semister;