import React, { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { ConfigProvider, Menu } from 'antd';
const items = [
  {
    label: 'ROLES',
    key: 'roles',
    disabled: true,
  },
  {
    label: 'USUARIOS',
    key: 'usuarios',
    disabled: false,
  },
  {
    label: 'RAMAS',
    key: 'ramas',
    disabled: true,
  },
];
const OptionsPage = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextBase: '#ffffff',
          fontSize: 14,
        },
      }}
    >
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{
          width: 280,
          backgroundColor: '#0f2533',
          color: 'rgb(255, 255, 255)',
          fontWeight: 'bold',
        }}
      />
    </ConfigProvider>
  );
};
export default OptionsPage;
