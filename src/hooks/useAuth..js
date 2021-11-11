import { useContext } from "react";
import { AuthProviders } from "../Pages/Context/AuthProvider";

const useAuth = () => {
  return useContext(AuthProviders);
};

export default useAuth;
