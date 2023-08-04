import { useState, useEffect } from "react";
import { useRegisterUserMutation } from "@services/authApi";
const { useSelector, useDispatch } = require("react-redux");
import { setSignIn } from "@slices/auth/authSlice";
import token from "@api/calmstring/token";

const useRegisterUser = () => {
  const [password, setPassword] = useState("");
  const [password_repeated, setPassword_repeated] = useState("");
  const { email, email_signature, inviter } = useSelector(
    (state) => state.registration
  );
  const [registerUser, result] = useRegisterUserMutation();
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (password !== password_repeated) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [password, password_repeated]);

  const submit = async () => {
    const response = await registerUser({
      email,
      signature: email_signature,
      password,
      password_repeated,
      inviter,
    });
    if (!response.error) {
      const { data } = response;
      await token.set.access(data.access_token);
      await token.set.refresh(data.refresh_token);
      dispatch(setSignIn(true));
    }
  };

  return {
    password,
    setPassword,
    password_repeated,
    setPassword_repeated,
    isValid,
    submit,
    requestResult: result,
  };
};

export default useRegisterUser;
