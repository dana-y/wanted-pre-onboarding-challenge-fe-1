import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import styled from "styled-components";
import Detail from "../detail/Detail";
import List from "../list/List";
import { Navigate, useNavigate } from "react-router-dom";

const Wrap = styled.div`
  position: relative;
  width: 80rem;
  height: 40rem;
  margin: 10rem auto;
  border-radius: 10px;
  border: solid 1px navy;
`;
const FlexWrap = styled.article`
  display: flex;
  height: 100%;
`;
const LogoutBtn = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
`;
const Board = () => {
  const [addStatus, setAddStatus] = useState(false);
  const [detailTit, setDetailTit] = useState("");
  const [detailTxt, setDetailTxt] = useState([]);
  const [clickedId, setClickedId] = useState("");
  const TOKEN = localStorage.getItem("token");
  const [data, setData] = useState();

  const getList = async () => {
    try {
      const res = await axios.get(BASE_URL + "/todos", {
        headers: {
          Authorization: TOKEN,
        },
      });
      console.log("getList");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const refresh = () => {
    setDetailTit("");
    setDetailTxt("");
    getList();
  };

  useEffect(() => {
    getList();
  }, []);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };
  return (
    <Wrap>
      <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
      <FlexWrap>
        <List
          data={data}
          setAddStatus={setAddStatus}
          addStatus={addStatus}
          setDetailTit={setDetailTit}
          setDetailTxt={setDetailTxt}
          setClickedId={setClickedId}
        />
        <Detail
          data={data}
          getList={getList}
          setAddStatus={setAddStatus}
          addStatus={addStatus}
          detailTit={detailTit}
          detailTxt={detailTxt}
          clickedId={clickedId}
          refresh={refresh}
        />
      </FlexWrap>
    </Wrap>
  );
};
export default Board;
