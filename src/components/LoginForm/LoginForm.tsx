import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Checkbox, Input } from "antd"
import './style.css'
export const LoginForm = () => {
  return <div className="flex flex-col gap-2">
     <Input size="large" placeholder="User Name" prefix={<UserOutlined />} />
     <Input.Password placeholder="Password" prefix={<LockOutlined />} />
     <Checkbox>Nhớ mật khẩu</Checkbox>
  </div>
}