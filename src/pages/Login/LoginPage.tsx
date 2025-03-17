/** @format */
import { logo } from "~/assets/images/png/index";
import { Loading } from "~/components/Loading";
import "./style.css";
import { LoginForm } from "~/components/LoginForm";
import { Button } from "antd";
import { useState } from "react";
export default function LoginPage() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className=" flex min-h-full gap-8 flex-col justify-center ">
      <div className="object-none flex justify-center">
        <img src={logo} alt="VFM_LOGO" />
      </div>
      {loading ? (
        <div className="flex justify-center">
          <Loading size="large" />
        </div>
      ) : (
        <div className="login-form-container flex flex-col">
          <LoginForm />
          <div className="bottom-0 w-full">
            <Button className="ant-btn-login" size="large" block>
              Đăng Nhập
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
