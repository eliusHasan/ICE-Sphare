import React from 'react';
import { Select } from 'antd';


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


const Select_Batch = () => (
  <>
    <h2>Select Session : <Select
    showSearch
    placeholder="Select Session"
    optionFilterProp="label"
    onChange={onChange}
    onSearch={onSearch}
    options={option}
  /></h2>
  
  </>
);
export default Select_Batch;