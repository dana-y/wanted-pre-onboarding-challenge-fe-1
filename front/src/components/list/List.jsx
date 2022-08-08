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
const ListUL = styled.ul`
  padding: 1rem;
  font-size: 1.3rem;
  flex-direction: column;
  display: flex;
  gap: 1rem;
`;

const List = ({ setAddStatus, addStatus, data }) => {
  return (
    <Wrap>
      <ListHeader>
        <Title>할 일 목록</Title>
        <AddBtn
          onClick={() => {
            setAddStatus((prev) => !prev);
          }}
        >
          {addStatus ? "취소" : "추가"}
        </AddBtn>
      </ListHeader>
      <ListUL>
        {data?.data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ListUL>
    </Wrap>
  );
};

export default List;
