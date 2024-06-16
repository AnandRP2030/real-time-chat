import { useState } from "react";
import { LoginCredentials } from "../types/userTypes";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { addNewUser } = useAuthContext();
  const login = async (credentials: LoginCredentials) => {
    if (!validateCredentials(credentials)) {
      return false;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data.data));
      addNewUser(data.data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

const validateCredentials = (credentials: LoginCredentials) => {
  const { userName, password } = credentials;
  if (!userName || !password) {
    toast.error("Username and password is required.");
    return false;
  }
  return true;
};
