import { useState } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { BASE_URL } from "../../constants";

const Wrap = styled.div`
  width: 50%;
  border-left: solid 1px lightgray;
`;
const DetailHeader = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: solid 1px lightgray;
`;
const Title = styled.h3`
  font-size: 2rem;
`;
const ContentsWrap = styled.div`
  padding: 1rem;
`;
const Contents = styled.p`
  font-size: 1.4rem;
`;
const InputCss = css`
  width: 100%;
  height: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;
const TitInput = styled.input`
  ${InputCss}
  width: 60%;
  font-size: 2rem;
`;
const ContentsInput = styled.textarea`
  ${InputCss}

  resize: none;
`;
const Detail = ({
  data,
  addStatus,
  setAddStatus,
  getList,
  detailTit,
  detailTxt,
}) => {
  const [titValue, setTitValue] = useState();
  const [ctntValue, setCtntTitValue] = useState();
  const TOKEN = localStorage.getItem("token");

  const onInputTit = (e) => {
    setTitValue(e.target.value);
  };

  const onInputCtnt = (e) => {
    setCtntTitValue(e.target.value);
  };

  const addList = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/todos",
        {
          title: titValue,
          content: ctntValue,
        },
        {
          headers: {
            Authorization: TOKEN,
          },
        }
      );
      console.log(res);
      setTitValue("");
      setCtntTitValue("");
      getList();
      setAddStatus(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrap>
      <DetailHeader>
        {addStatus ? (
          <>
            <TitInput
              onInput={onInputTit}
              placeholder="제목을 입력해주세요"
              value={titValue}
            ></TitInput>
            <div>
              <button onClick={addList}>저장</button>
            </div>
          </>
        ) : (
          <Title>{detailTit}</Title>
        )}
      </DetailHeader>
      <ContentsWrap>
        {addStatus ? (
          <ContentsInput
            onInput={onInputCtnt}
            placeholder="내용을 입력해주세요"
            value={ctntValue}
          ></ContentsInput>
        ) : (
          <Contents>{detailTxt}</Contents>
        )}
      </ContentsWrap>
    </Wrap>
  );
};

export default Detail;
