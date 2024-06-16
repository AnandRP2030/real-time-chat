import { useState } from "react";
import { toast } from "react-hot-toast";
import { SignupUserDetails } from "../types/userTypes";
import {useAuthContext} from "../context/AuthContext";
export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {addNewUser} = useAuthContext();
  const signup = async (userData: SignupUserDetails) => {
    if (!isFieldsAreValid(userData)) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data.data));
      addNewUser(data.data);      
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

const isFieldsAreValid = (userData: SignupUserDetails) => {
  const { fullName, userName, password, confirmPassword, gender } = userData;

  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("All Fields are required");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password and confirm Password should match");
    return false;
  }
  return true;
};
