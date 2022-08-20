import token from "@api/calmstring/token";
import { setSignIn, setUser } from "@slices/auth/authSlice";
import { useLogoutMutation } from "@services/userApi";
import { useDispatch } from "react-redux";

const useLogout = () => {
  const [logout, result] = useLogoutMutation();
  const dispatch = useDispatch();
  const submit = async () => {
    await logout();
    await token.set.access("");
    await token.set.refresh("");
    dispatch(setSignIn(false));
    dispatch(setUser({}));
    return true;
  };
  return submit;
};

export default useLogout;
