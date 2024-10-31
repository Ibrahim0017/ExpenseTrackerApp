import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSignup from "./pages/EmployeePages/AdminSignup";
import AdminSignin from "./pages/EmployeePages/AdminSignin";

import AdminDashboard from "./pages/Admin Pages/AdminDashboard";
import NotFound from "./pages/Admin Pages/NotFound";
import OtpInput from "./components/EmployeeComponents/OtpInput";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AdminSignup />} />
          <Route path="/otpinput" element={<OtpInput />} />
          <Route path="/adminsignin" element={<AdminSignin />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

