import { Button } from "antd";
import React from "react";

function SocialLogin() {
  return (
    <Button
      style={{
        width: "100%",
      }}
      icon={
        <img
          width={24}
          height={24}
          src="https://img.icons8.com/color/48/google-logo.png"
          alt="google-logo"
        />
      }
    >
      Google
    </Button>
  );
}

export default SocialLogin;
