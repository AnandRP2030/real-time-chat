import { useState } from "react";
import { toast } from "react-hot-toast";
import { SignupUserDetails } from "../types/userTypes";
export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const signup = async (userData: SignupUserDetails) => {
    if (!isFieldsAreValid(userData)) {
      return;
    }
  };
  return { loading, signup };
};

const isFieldsAreValid = (userData: SignupUserDetails) => {
  const { fullName, username, password, confirmPassword, gender } = userData;

  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("All Fields are required");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password and confirm Password should match");
    return false;
  }
  return true;
};
