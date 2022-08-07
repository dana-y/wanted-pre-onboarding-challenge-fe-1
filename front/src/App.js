import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Main from "./page/Main";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./page/Login";
import { useEffect, useState } from "react";
const ResetCss = createGlobalStyle`
  ${reset}
  html {
    font-size: 10px;
  }
  &.hide {
    display:none;
  }
`;

function App() {
  const TOKEN = localStorage.getItem("token");

  const [isLoginState, setIsLoginState] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsLoginState(() => {
      return TOKEN ? true : false;
    });
  }, [location]);

  return (
    <>
      <ResetCss />
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route
          path="/"
          element={
            isLoginState ? <Main /> : <Navigate replace={true} to="/auth" />
          }
        />
      </Routes>
    </>
  );
}

export default App;
