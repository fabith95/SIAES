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
    <div style={{ fontSize: '1.5rem', color: '#918b91', fontWeight: 'bold', marginBottom: '40px' }}>
      NUEVA RAMA
    </div>
  );

  const formItemLayout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 18 },
  };

  return (
    <>
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
          background: '#F0F5FF',
        }}
      >
        CREAR RAMA
      </Button>

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
          <Form
            form={form}
            layout="vertical"
            name="userForm"
            {...formItemLayout}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input the name!' }]}
              style={{ display: 'flex', flexDirection: 'row', margin: 0 }}
            >
              <div
                style={{
                  width: '350px',
                  marginLeft: '6px',
                }}
              >
                <Input />
              </div>
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Please input the age!' }]}
              style={{ display: 'flex', flexDirection: 'row', margin: 0 }}
            >
              <div
                style={{
                  width: '350px',
                  marginLeft: '12px',
                }}
              >
                <Input />
              </div>
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: 'Please input the address!' }]}
              style={{ display: 'flex', flexDirection: 'row', margin: 0 }}
            >
              <div
                style={{
                  width: '350px',
                }}
              >
                <Input />
              </div>
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: 'Please input the address!' }]}
              style={{ display: 'flex', flexDirection: 'row', margin: 0 }}
            >
              <div
                style={{
                  width: '350px',
                  marginLeft: '6px',
                }}
              >
                <Input />
              </div>
            </Form.Item>
            <Form.Item
              label="RH"
              name="rh"
              rules={[{ required: true, message: 'Please input the address!' }]}
              style={{ display: 'flex', flexDirection: 'row', margin: 0 }}
            >
              <div
                style={{
                  width: '350px',
                  marginLeft: '15px',
                }}
              >
                <Input />
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default ModalFormsBottom;
