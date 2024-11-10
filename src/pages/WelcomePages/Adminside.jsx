import { Route, Routes } from 'react-router-dom'
import AdminSignup from "../../pages/EmployeePages/AdminSignup";
import AdminSignin from "../../pages/EmployeePages/AdminSignin";
import OtpInput from "../../components/EmployeeComponents/OtpInput";
import AdminDashboard from '../Admin Pages/AdminDashboard';


const Adminside = () => {
  return (
    <>
    <Routes>
          <Route path="/adminsignup" element={<AdminSignup />} />
          <Route path="/otpinput" element={<OtpInput />} />
          <Route path="/adminsignin" element={<AdminSignin />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
    </Routes>
    </>
  )
}

export default Adminside