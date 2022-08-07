import { useState } from "react";
import styled from "styled-components";
import SignUpModal from "../components/SignUpModal/SignUpModal";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const showSingnUpModal = () => {
    setShowModal(true);
  };
  return (
    <>
      로그인 페이지
      <span onClick={showSingnUpModal}>회원가입하기</span>
      <SignUpModal setShowModal={setShowModal} showModal={showModal} />
    </>
  );
};

export default Login;
