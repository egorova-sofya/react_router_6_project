import { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider.tsx";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
