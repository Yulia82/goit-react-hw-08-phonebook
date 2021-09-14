import styled from "@emotion/styled";

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgUser = styled.img`
  margin-right: 10px;
  border-radius: 6px;
`;

export const TxtUser = styled.span`
  margin-right: 20px;
`;

export const BtnOut = styled.button`
  min-width: 80px;
  padding: 3px 12px;

  border-color: var(--second-color);
  border-radius: 6px;

  &:hover,
  &:focus {
    background-color: var(--second-color);
    color: var(--invers-color);
    cursor: pointer;
  }
`;
