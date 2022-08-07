import { useState } from "react";
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

  return (
    <FlexWrap>
      <List setAddStatus={setAddStatus} />
      <Detail setAddStatus={setAddStatus} addStatus={addStatus} />
    </FlexWrap>
  );
};
export default Board;
