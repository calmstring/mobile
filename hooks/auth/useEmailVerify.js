import { useEffect, useState } from "react";
import { useVerifyEmailMutation } from "@services/authApi";
import { useSelector, useDispatch } from "react-redux";
import { setEmailSignature } from "@slices/auth/registrationSlice";

export default function useEmailVerify() {
  const { email } = useSelector((state) => state.registration);
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [verifyEmail, result] = useVerifyEmailMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (code.length === 6) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [code]);

  const submit = async () => {
    if (!isValid) return false;
    const response = await verifyEmail({ email, code });

    if (response.error) {
      return false;
    } else {
      const signature = response.data.signature;
      dispatch(setEmailSignature(signature));
      return true;
    }
  };

  return { code, setCode, isValid, submit, requestResult: result };
}
