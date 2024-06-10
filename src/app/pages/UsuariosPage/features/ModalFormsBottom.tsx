import React, { useState } from 'react';
import { Button, ConfigProvider, Modal, Form, Input } from 'antd';

const ModalFormsBottom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        console.log('Form values:', values);
        form.resetFields();
        setIsModalOpen(false);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const customTitle = (
    <div style={{ fontSize: '1.5rem', color: '#918b91', fontWeight: 'bold' }}>
      NUEVO USUARIO
    </div>
  );

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#F0F5FF',
          },
        }}
      >
        <Button
          type="primary"
          onClick={showModal}
          style={{
            width: 'auto',
            height: 40,
            display: 'flex',
            alignItems: 'center',
            border: 'solid 2px #cccccc',
            marginLeft: '6%',
            color: '#000000',
            fontWeight: 'bold',
          }}
        >
          CREAR USUARIO
        </Button>
      </ConfigProvider>

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#df1833',
          },
        }}
      >
        <Modal
          style={{
            textAlign: 'center',
          }}
          title={customTitle}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Submit"
        >
          <Form form={form} layout="vertical" name="userForm">
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please input the name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="age"
              label="Age"
              rules={[{ required: true, message: 'Please input the age!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: 'Please input the address!' }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default ModalFormsBottom;
