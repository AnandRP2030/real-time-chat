import { useState, createContext, useContext, FC, ReactNode } from "react";
import { LoginUserDeatils } from "../types/userTypes";

interface AuthContextType {
  authUser: LoginUserDeatils | null;
  addNewUser: (user: LoginUserDeatils) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const user = JSON.parse(
    localStorage.getItem("chat-user") || "null"
  ) as LoginUserDeatils | null;
  const [authUser, setAuthUser] = useState<LoginUserDeatils | null>(user);

  const addNewUser = (user: LoginUserDeatils) => {
    setAuthUser(user);
  };
  return (
    <AuthContext.Provider value={{ authUser, addNewUser }}>
      {children}
    </AuthContext.Provider>
  );
};
