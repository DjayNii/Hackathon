import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import HomePage from "./components/HomePage";

import FormBuilder from "./components/FormBuilder";
import FormView from "./components/FormView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/home" element={<HomePage></HomePage>} />
        <Route path="/formBuilder" element={<FormBuilder></FormBuilder>} />
        <Route path="/formView" element={<FormView></FormView>} />
      </Routes>
    </>
  );
}

export default App;
