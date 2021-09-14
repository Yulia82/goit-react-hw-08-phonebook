import defaultAvatar from "./default-avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "redux/auth";
import { userLogoutOperation } from "../../redux/auth/auth-operations";
import { UserMenuContainer, ImgUser, TxtUser, BtnOut } from "./UserMenu.styles";

function UserMenu() {
  const avatar = defaultAvatar;
  const email = useSelector(selectors.getEmail);
  const dispatch = useDispatch();

  return (
    <UserMenuContainer>
      <ImgUser src={avatar} alt="avatar" width="30" />
      <TxtUser>{email}</TxtUser>
      <BtnOut type="button" onClick={() => dispatch(userLogoutOperation())}>
        SignOut
      </BtnOut>
    </UserMenuContainer>
  );
}

export default UserMenu;
