import styled from "styled-components";

const Wrap = styled.div`
  width: 50%;
`;
const ListHeader = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: solid 1px lightgray;
`;
const Title = styled.h3`
  font-size: 2rem;
`;
const AddBtn = styled.button`
  /* height: auto; */
`;
const List = ({ setAddStatus }) => {
  return (
    <Wrap>
      <ListHeader>
        <Title>할 일 목록</Title>
        <AddBtn
          onClick={() => {
            setAddStatus(true);
          }}
        >
          +
        </AddBtn>
      </ListHeader>
      <ul>
        <li>빨래하기</li>
      </ul>
    </Wrap>
  );
};

export default List;
