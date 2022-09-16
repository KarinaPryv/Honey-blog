import React from 'react';
import { Space, Spin } from 'antd';

import './spinner.scss'

const Spinner = () => (
  <Space size="large">
    <Spin size="large" />
  </Space>
);

export default Spinner;