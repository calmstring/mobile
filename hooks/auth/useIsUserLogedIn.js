import { useEffect } from "react";
import { isUserLogedIn } from "@slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

/**
 * Check if user is logged in and fetch user info if user is logged in
 */
const useIsUserLogedIn = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(isUserLogedIn());
  }, []);

  return { isLoggedIn, isLoading };
};

export default useIsUserLogedIn;
