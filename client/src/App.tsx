import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/signup/signup";
import { Login } from "./components/login/login";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Home } from "./components/home/Home";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
