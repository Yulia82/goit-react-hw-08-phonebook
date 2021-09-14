import SectionTitle from "../components/SectionTitle";
import { useSelector } from "react-redux";
import { selectors } from "redux/auth";
import { TxtTitle } from "../components/SectionTitle/SectionTitle.styles";

function HomepageView() {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);
  const userName = useSelector(selectors.getName);
  const token = useSelector(selectors.getToken);

  const str = `WELCOME, ${userName}`;

  if (!token) {
    return (
      <SectionTitle title="WELCOME!">
        <TxtTitle>Sign in or register</TxtTitle>
      </SectionTitle>
    );
  }

  return <>{isLoggedIn && token && <SectionTitle title={str} />}</>;
}

export default HomepageView;
