import React, { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { ConfigProvider, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
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
    disabled: false,
  },
];
const OptionsPage = () => {
  const [current, setCurrent] = useState('usuarios');
  const navigate = useNavigate();

  const onClick = e => {
    console.log('click ', e);
    setCurrent(e.key);

    if (e.key === 'usuarios') {
      navigate('/UsuariosPage');
    } else if (e.key === 'ramas') {
      navigate('/RamasPAge');
    }
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
