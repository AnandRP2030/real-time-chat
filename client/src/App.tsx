import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignUp } from "./components/signup/signup";
import { Login } from "./components/login/login";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Home } from "./components/home/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
function App() {
  const { authUser } = useAuthContext();
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
