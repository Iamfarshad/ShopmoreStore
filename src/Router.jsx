import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./Screens/Landingpage";
import Dashboard from "./Screens/Dashboard";
import Login from "./Screens/Login";
import Createaccount from "./Screens/Createaccount";
import Forgetpassword from "./Screens/Forgetpassword";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} /> 
        <Route path="login" element={<Login />} /> 
        <Route path="forgetpassword" element={<Forgetpassword/>} />
        <Route path="createaccount" element={<Createaccount/>} />
        <Route path="dashboard" element={<Dashboard />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
