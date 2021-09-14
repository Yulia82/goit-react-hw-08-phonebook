import styled from "@emotion/styled";

export const BtnAuth = styled.button`
  min-width: 80px;
  padding: 4px 15px;

  border-color: var(--second-color);
  border-radius: 6px;

  &:hover,
  &:focus {
    background-color: var(--second-color);
    color: var(--invers-color);
    cursor: pointer;
  }
`;

export const AuthLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;

  font-weight: bold;
  font-size: 14px;
`;

export const AuthInput = styled.input`
  border-radius: 4px;
  height: 20px;
  border-color: var(--second-color);

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    border-color: var(--main-color);
  }
`;

export const AuthForm = styled.form`
  width: 450px;
  margin-left: auto;
  margin-right: auto;
`;
