import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
const Login = () => {
  // React-Router v5
  // const dispatch = useDispatch();

  // React-Router v6
  const navigate = useNavigate();
  const selector = useSelector((state) => state);
  console.log(selector.router);
  return (
    <div>
      <h2>ログイン</h2>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        ログインする
      </button>
    </div>
  );
};

export default Login;
