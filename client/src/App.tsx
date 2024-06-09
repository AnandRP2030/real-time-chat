import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { SignUp } from './components/signup/signup';
import { Login } from './components/login/login';
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<h1> Home </h1>}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
