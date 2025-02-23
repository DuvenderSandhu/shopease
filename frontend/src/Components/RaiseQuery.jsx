import React, { useEffect } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
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
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const RaiseQuery = () => {
    const navigate= useNavigate()
    const user = useSelector(state => state.changeUser)
    useEffect(()=>{
        !user.token?navigate('/signup'):""
    },[])
    return (
  <div className="flex flex-col items-center">
    <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl my-8">Raise a Query </h1>

    <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['subject', ]}
      label="Subject"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item name={['user', 'query']} label="Query" rules={[{required:true}]}>
      <Input.TextArea />
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
  </Form>
  </div>
)};
export default RaiseQuery;