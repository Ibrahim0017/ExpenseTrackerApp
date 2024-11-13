import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSignup from "./pages/EmployeePages/AdminSignup";
import AdminSignin from "./pages/EmployeePages/AdminSignin";

import AdminDashboard from "./pages/Admin Pages/AdminDashboard";
// import NotFound from "./pages/Admin Pages/NotFound";

import File from "./service/File";
import SignIn from "./service/SignIn";
// import Profile from "./pages/Admin Pages/Profile";
import EmployeesDashboard from "./pages/EmployeesDashboard/EmployeesDashboard";
// import NotFound from "./pages/Admin Pages/NotFound";n
import OtpInput from "./components/EmployeeComponents/OtpInput";
import Intro from "./pages/WelcomePages/Intro";
import Welcome from "./pages/WelcomePages/Welcome";



function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={ <Intro />} />
        <Route exact path="/welcome" element={ <Welcome />} />
          <Route path="/sign-up/admin" element={<AdminSignup />} />
          <Route path="/sign-up/admin/otpinput" element={<OtpInput />} />
          <Route path="/adminsignin" element={<AdminSignin />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}      
          <Route path="/admin/*" element={<AdminDashboard />} />
          {/* <Route path="/employeesdash/*" element={<EmployeesDashboard />} /> */}
          <Route path="/employeesdash/*" element={<EmployeesDashboard />} />
          <Route path="/otp" element={<OtpInput />} />
          <Route path="/sign-up/staff" element={<File/>} />
          <Route path="/signIn" element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

