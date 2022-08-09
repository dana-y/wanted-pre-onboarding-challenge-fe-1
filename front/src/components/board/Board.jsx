import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import styled from "styled-components";
import Detail from "../detail/Detail";
import List from "../list/List";

const FlexWrap = styled.article`
  display: flex;
  width: 80rem;
  height: 40rem;
  margin: 50px auto;
  border: solid 1px lightgray;
  border-radius: 10px;
`;

const Board = () => {
  const [addStatus, setAddStatus] = useState(false);
  const [detailTit, setDetailTit] = useState("");
  const [detailTxt, setDetailTxt] = useState([]);
  const TOKEN = localStorage.getItem("token");
  const [data, setData] = useState();

  // useEffect(() => {}, [detailTit]);
  const getList = async () => {
    try {
      const res = await axios.get(BASE_URL + "/todos", {
        headers: {
          Authorization: TOKEN,
        },
      });
      console.log(res);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <FlexWrap>
      <List
        data={data}
        setAddStatus={setAddStatus}
        addStatus={addStatus}
        setDetailTit={setDetailTit}
        setDetailTxt={setDetailTxt}
      />
      <Detail
        data={data}
        getList={getList}
        setAddStatus={setAddStatus}
        addStatus={addStatus}
        detailTit={detailTit}
        detailTxt={detailTxt}
      />
    </FlexWrap>
  );
};
export default Board;
