import { useState, useEffect } from "react";
import { useUserExistsQuery } from "@services/authApi";
import { useDispatch } from "react-redux";
import {
  setInviter as registrationSetInviter,
  reset,
} from "@slices/auth/registrationSlice";

/**
 * Checks if the inviter exists.
 * @returns {string} inviter - The inviter's email.
 * @returns {function} setInviter - The setter for the inviter.
 * @returns {callback} submit - Sets the inviter in global state
 *
 */
const useVerifyInviter = () => {
  const dispatch = useDispatch();
  const [inviter, setInviter] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [debouncedInviter, setDebouncedInviter] = useState(inviter);
  const { data, error } = useUserExistsQuery(debouncedInviter);

  useEffect(() => {
    dispatch(reset());
  }, []);

  useEffect(() => {
    if (data && !error) {
      setIsValid(data.user.trusted);
      setDebouncedInviter(inviter);
    }
  }, [data]);

  useEffect(() => {
    setIsValid(false);
    const timerId = setTimeout(() => {
      setDebouncedInviter(inviter);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [inviter]);

  const submit = () => {
    if (isValid) {
      dispatch(registrationSetInviter(debouncedInviter));
      return true;
    }
    return false;
  };

  return {
    inviter,
    setInviter,
    isValid: isValid || !inviter.length,
    submit,
    requestResult: undefined,
  };
};

export default useVerifyInviter;
