import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSignInMutation } from "@services/authApi";
import { setSignIn } from "@slices/auth/authSlice";
import token from "@api/calmstring/token";
import { validateEmail } from "@utils/";

/**
 * Perform sign in via email and password.
 * On submit, set global isSignIn to true.
 */
const useLogin = () => {
  const dispatch = useDispatch();
  const [signIn, result] = useSignInMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateEmail(email) && password.length);
  }, [email, password]);

  const submit = async () => {
    if (isValid) {
      const response = await signIn({ email, password });
      if (!response.error) {
        const { data } = response;
        await token.set.access(data.access_token);
        await token.set.refresh(data.refresh_token);
        dispatch(setSignIn(true));
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isValid,
    submit,
    requestResult: result,
  };
};

export default useLogin;
