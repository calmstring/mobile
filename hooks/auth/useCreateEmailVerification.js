import { useState, useEffect } from "react";
import { validateEmail } from "@utils/";
import { useSendEmailVerificationMutation } from "@services/authApi";
import { useDispatch } from "react-redux";
import { setEmail as registrationSetEmail } from "@slices/auth/registrationSlice";

const useCreateEmailVerification = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [sendEmailVerification, result] = useSendEmailVerificationMutation();

  useEffect(() => {
    if (!email.length) {
      return;
    }
    setIsValid(validateEmail(email));
  }, [email]);

  const submit = async () => {
    if (isValid) {
      const response = await sendEmailVerification({ email });

      if (response.error) {
        return false;
      } else {
        dispatch(registrationSetEmail(email));
        return true;
      }
    } else {
      return false;
    }
  };

  return {
    email,
    setEmail,
    submit,
    isValid: isValid || !email.length,
    submit,
    requestResult: result,
  };
};

export default useCreateEmailVerification;
