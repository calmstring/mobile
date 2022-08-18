import { useState, useEffect } from "react";
import { validateEmail } from "@utils/";

const useVerifyEmail = () => {
  const [email, setEmail, submit] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!email.length) {
      return;
    }
    setIsValid(validateEmail(email));
  }, [email]);

  return { email, setEmail, submit, isValid: isValid || !email.length };
};

export default useVerifyEmail;
