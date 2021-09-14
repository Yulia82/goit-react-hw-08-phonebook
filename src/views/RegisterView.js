import { useState } from "react";
import { Wrapper } from "../components/Wrapper/Wrapper.styles";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import SectionTitle from "../components/SectionTitle";
import { BtnAuth, AuthLabel, AuthInput, AuthForm } from "./AuthView.styles";

function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case "name":
        setName(value);
        break;
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

    dispatch(authOperations.userRegisterOperation({ name, email, password }));

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Wrapper>
      <SectionTitle title="Please, fill in all the fields" />

      <AuthForm onSubmit={handleSubmit} autoComplete="off">
        <AuthLabel>
          Name
          <AuthInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Anna Kuhar"
          />
        </AuthLabel>

        <AuthLabel>
          Email
          <AuthInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="an@gmail.com"
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

        <BtnAuth type="submit">Register</BtnAuth>
      </AuthForm>
    </Wrapper>
  );
}

export default RegisterView;
