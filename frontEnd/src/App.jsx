import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import HomePage from "./components/HomePage";
import QuestionBuilder from "./components/QuestionMaker";
import FormBuilder from "./components/FormBuilder";
import FormView from "./components/FormView";

function App() {

  return (
    <>
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
      {/* <HomePage></HomePage> */}
      <FormBuilder></FormBuilder>
      {/* <FormView></FormView> */}
    </>
  );
}

export default App;