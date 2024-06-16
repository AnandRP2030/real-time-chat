import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { removeUser } = useAuthContext();
  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Context-Type": "application/json",
        },
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-user");
      removeUser();
    } catch (error: any) {
      toast(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };
  return { loading, logout };
};
