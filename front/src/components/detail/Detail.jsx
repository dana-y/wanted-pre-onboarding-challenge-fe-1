import styled, { css } from "styled-components";
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
const Detail = ({ addStatus, setAddStatus }) => {
  return (
    <Wrap>
      <DetailHeader>
        {addStatus ? (
          <>
            <TitInput placeholder="제목을 입력해주세요"></TitInput>
            <div>
              <button>저장</button>
              <button onClick={() => setAddStatus(false)}>취소</button>
            </div>
          </>
        ) : (
          <Title>빨래하기</Title>
        )}
      </DetailHeader>
      <ContentsWrap>
        {addStatus ? (
          <ContentsInput placeholder="내용을 입력해주세요"></ContentsInput>
        ) : (
          <Contents>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugit id error quae consequatur dolorum maiores nobis, ab molestiae
            fuga nihil, in aliquid, ipsum eos illum suscipit? Obcaecati, quae
            quod.
          </Contents>
        )}
      </ContentsWrap>
    </Wrap>
  );
};

export default Detail;
