import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Main from "./page/Main";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./page/Login";
import { useEffect, useState } from "react";

const ResetCss = createGlobalStyle`
  ${reset}
  html {
    font-size: 14px;
  }
  &.hide {
    display:none;
  }
`;

function App() {
  const TOKEN = localStorage.getItem("token");

  const [isLoginState, setIsLoginState] = useState(false);
  // const location = useLocation();

  useEffect(() => {
    console.log(isLoginState);
    setIsLoginState(Boolean(TOKEN));
  }, []);

  console.log(isLoginState);

  return (
    <>
      <ResetCss />
      <Routes>
        <Route path="auth" element={<Login />} />
        <Route
          path="/"
          element={
            isLoginState ? <Main /> : <Navigate replace={true} to="/auth" />
          }
        />
        {/* {isLoginState ? (
          <Route path="/main" element={<Main />} />
        ) : (
          <Route path="/auth" element={<Login />} />
        )} */}
      </Routes>
    </>
  );
}

export default App;
