import Navigation from "../Navigation/Navigation";
import AuthNav from "../Navigation/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { selectors } from "redux/auth";
import { useSelector } from "react-redux";
import { HeaderPhonebook } from "./Header.styles";

export default function Header() {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);

  return (
    <HeaderPhonebook>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderPhonebook>
  );
}
