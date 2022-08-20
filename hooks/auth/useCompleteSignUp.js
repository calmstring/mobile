import { useState, useEffect } from "react";
import { useUserExistsQuery } from "@services/authApi";
import { useCompleteSignUpMutation } from "@services/userApi";
import { removeUndefinedProperties } from "@utils/";

const useCompleteSignUp = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState({});
  const { data, isLoading } = useUserExistsQuery(username);
  const [completeSignUp, result] = useCompleteSignUpMutation();

  useEffect(() => {
    const err = {};

    if (data && data.exists) {
      err.username = "Użytkownik o podanej nazwie już istnieje";
    }

    setErrors(err);
  }, [data, username]);

  const submit = async () => {
    if (!username.length) {
      setErrors((err) => ({
        ...err,
        username: "Nazwa użytkownika jest wymagana",
      }));
      return false;
    }
    const response = await completeSignUp({ username, full_name: fullName });
    if (response.errors) {
      setErrors(
        removeUndefinedProperties({
          username: response.errors?.data?.username,
          fullName: response.errors?.data?.full_name,
          detail: response.errors?.data?.detail,
        })
      );
      return false;
    } else {
      return true;
    }
  };

  return {
    username,
    setUsername,
    fullName,
    setFullName,
    errors,
    isLoading,
    submit,
    requestResult: result,
  };
};

export default useCompleteSignUp;
