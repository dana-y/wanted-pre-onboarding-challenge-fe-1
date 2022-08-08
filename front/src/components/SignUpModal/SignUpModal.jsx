import styled from "styled-components";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 20;
  cursor: auto;
`;

const ModalWrapper = styled.div`
  padding: 1rem;
  position: fixed;
  width: 20rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  z-index: 30;
  border-radius: 10px;
  background-color: #fff;
`;

const SignUpModal = ({ showModal, setShowModal }) => {
  const [emailValue, setEmailValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");

  const onInputEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const onInputPwd = (e) => {
    setPwdValue(e.target.value);
  };

  const navigate = useNavigate();

  const signUpSubmit = async () => {
    try {
      const res = await axios.post(BASE_URL + "/users/create", {
        email: emailValue,
        password: pwdValue,
      });
      window.alert(res.data.message);
      setShowModal(false);
      navigate("/");
    } catch (error) {
      window.alert(error.response.data.detail);
      console.log(error);
    }
  };
  const REX = /@,\./;
  return (
    <div className={showModal ? null : "hide"}>
      <Overlay>
        <ModalWrapper>
          회원가입
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            onInput={onInputEmail}
          />
          <p>{!REX.test(emailValue) && "잘못된 이메일 형식입니다."}</p>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onInput={onInputPwd}
          />
          <p>{pwdValue.length < 8 && "비밀번호를 8자 이상 입력해주세요"}</p>
          <button onClick={signUpSubmit}>가입</button>
          <button onClick={() => setShowModal(false)}>취소</button>
        </ModalWrapper>
      </Overlay>
    </div>
  );
};

export default SignUpModal;
