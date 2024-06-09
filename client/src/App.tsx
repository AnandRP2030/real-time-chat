import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { SignUp } from './components/signup/signup';
import { Login } from './components/login/login';
import { Sidebar } from './components/sidebar/Sidebar';
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<h1> Home </h1>}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/sidebar" element={<Sidebar />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
