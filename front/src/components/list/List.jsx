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

const List = ({
  setAddStatus,
  addStatus,
  data,
  setDetailTit,
  setDetailTxt,
}) => {
  const showDetail = (event) => {
    setDetailTit(event.target.innerText);
    const key = event.target.textContent.slice(0, 21);
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
        {data.data.map((item, i) => (
          <li onClick={showDetail} key={i}>
            <span className="hide">{item.id}</span>
            {item.title}
          </li>
        ))}
      </ListUL>
    </Wrap>
  );
};

export default List;
