import { useState } from "react";
import { Wrapper } from "../components/Wrapper/Wrapper.styles";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import SectionTitle from "../components/SectionTitle";
import { BtnAuth, AuthLabel, AuthInput, AuthForm } from "./AuthView.styles";

function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(authOperations.userLoginOperation({ email, password }));

    setEmail("");
    setPassword("");
  };

  return (
    <Wrapper>
      <SectionTitle title="Please, enter your email and password" />

      <AuthForm onSubmit={handleSubmit} autoComplete="off">
        <AuthLabel>
          Email
          <AuthInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </AuthLabel>

        <AuthLabel>
          Password
          <AuthInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </AuthLabel>

        <BtnAuth type="submit">Login</BtnAuth>
      </AuthForm>
    </Wrapper>
  );
}

export default LoginView;
