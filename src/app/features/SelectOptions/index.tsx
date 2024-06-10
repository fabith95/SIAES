import { CustomFormItem, GeneralContainer } from './components/Containers';
import { Form, Select } from 'antd';

const { Option } = Select;

export function SelectOptions({ label }) {
  return (
    <GeneralContainer>
      <CustomFormItem
        name="gender"
        label={label}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="Select a option " allowClear size="small">
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </CustomFormItem>
    </GeneralContainer>
  );
}
