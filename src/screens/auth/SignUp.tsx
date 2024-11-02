import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Card, Typography, Input, Button, Checkbox, Space } from "antd";
import SocialLogin from "./components/SocialLogin";
const { Title, Paragraph, Text } = Typography;

export default function SignUp() {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const handleLogin = (value: { email: string; password: string }) => {
    console.log(value);
  };

  return (
    <div>
      <Card>
        <div className="text-center">
          {/* level = 2 sẽ hiển thị mức độ tương đương với H2 */}
          <Title level={2}>Create an account</Title>
          {/* type= secondary để giúp điều chỉnh màu nhạt hơn so với văn bản chính */}
          <Paragraph type="secondary">Start your 30-day free trial</Paragraph>
        </div>
        <Form
          layout="vertical"
          form={form}
          onFinish={handleLogin}
          disabled={isLoading}
          size="large"
        >
          <Form.Item
            name={"name"}
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
            ]}
          >
            <Input placeholder="Enter your name" allowClear />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              allowClear
              maxLength={100}
              type="email"
            />
          </Form.Item>
          <Form.Item
            name={"password"}
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password
              placeholder="Create a password"
              maxLength={100}
              type="password"
            />
          </Form.Item>
        </Form>
        <div className="row">
          {/* col-auto: cột sẽ tự mở rộng theo nội dung của nó */}
          <div className="col-auto">
            <Checkbox
              value={isRemember}
              onChange={(val) => setIsRemember(val.target.checked)}
            >
              Remember for 30 days
            </Checkbox>
          </div>
          <div className="col text-end">
            <Link to={"/"}>Forget Password?</Link>
          </div>
        </div>
        <div className="mt-4 mb-3">
          <Button
            onClick={() => form.submit()}
            type="primary"
            style={{
              width: "100%",
            }}
            size="large"
          >
            Login
          </Button>
        </div>
        <SocialLogin></SocialLogin>
        <div className="mt-1 text-center">
          <Space>
            <Text type="secondary">Already an acount ?</Text>
            <Link to={"/"}>Log in</Link>
          </Space>
        </div>
      </Card>
    </div>
  );
}
