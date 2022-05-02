import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

export const useUser = () => {
  const currentUser = useSelector(selectUser);
  return currentUser;
};
