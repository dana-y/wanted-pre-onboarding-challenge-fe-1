import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignUpModal from "../components/SignUpModal/SignUpModal";
import { BASE_URL } from "../constants";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");

  const onInputEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const onInputPwd = (e) => {
    setPwdValue(e.target.value);
  };

  const [showModal, setShowModal] = useState(false);
  const showSingnUpModal = () => {
    setShowModal(true);
  };
  const navigate = useNavigate();

  const signUpSubmit = async () => {
    try {
      const res = await axios.post(BASE_URL + "/users/login", {
        email: emailValue,
        password: pwdValue,
      });
      window.alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (error) {
      window.alert(error.response.data);
      console.log(error);
    }
  };

  return (
    <>
      로그인 페이지
      <input
        type="text"
        placeholder="이메일을 입력해주세요"
        onInput={onInputEmail}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onInput={onInputPwd}
      />
      <button onClick={signUpSubmit}>로그인</button>
      <span onClick={showSingnUpModal}>회원가입하기</span>
      <SignUpModal setShowModal={setShowModal} showModal={showModal} />
    </>
  );
};

export default Login;
