import styled from "styled-components";

const Wrap = styled.div`
  width: 50%;
`;
const ListHeader = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: solid 1px navy;
`;
const Title = styled.h3`
  font-size: 2rem;
`;
const AddBtn = styled.button`
  /* height: auto; */
`;
const ListUL = styled.ul`
  font-size: 1.3rem;
  flex-direction: column;
  display: flex;
`;

const TodoLi = styled.li`
  padding: 1rem;
  border-bottom: solid 1px lightgray;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;

const List = ({
  setAddStatus,
  addStatus,
  data,
  setDetailTit,
  setDetailTxt,
  setClickedId,
}) => {
  const showDetail = (event) => {
    setDetailTit(event.target.innerText);
    const key = event.target.textContent.slice(0, 21);
    setClickedId(key);
    const txt = data.data.filter((e) => e.id === key)[0]["content"];
    setDetailTxt(txt);
  };

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
        {data?.data.map((item, i) => (
          <TodoLi onClick={showDetail} key={i}>
            <span className="hide">{item.id}</span>
            {item.title}
          </TodoLi>
        ))}
      </ListUL>
    </Wrap>
  );
};

export default List;
