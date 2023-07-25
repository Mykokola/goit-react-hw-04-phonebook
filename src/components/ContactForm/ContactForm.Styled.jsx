import styled from '@emotion/styled';
export const FormTitle = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 37px;
  color: #3f79ff;
`;
export const FormContact = styled.form`
gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormButton = styled.button`
  background: inherit;
  border: 1px solid blue;
  font-size: 10px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background:#a0a0de;
    color:black;
  }
`;
