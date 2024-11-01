import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSignup from "./pages/EmployeePages/AdminSignup";
import AdminSignin from "./pages/EmployeePages/AdminSignin";

import AdminDashboard from "./pages/Admin Pages/AdminDashboard";
import NotFound from "./pages/Admin Pages/NotFound";
import CreateBranch from "./components/EmployeeComponents/CreateBranch";
import BranchDetail from "./pages/EmployeePages/BranchDetail";
import File from "./service/File";
import SignIn from "./service/SignIn";
import Profile from "./pages/Admin Pages/Profile";
import EmployeesDashboard from "./pages/EmployeesDashboard/EmployeesDashboard";
import OtpInput from "./components/EmployeeComponents/OtpInput";



function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AdminSignup />} />
          <Route path="/otpinput" element={<OtpInput />} />
          <Route path="/adminsignin" element={<AdminSignin />} />

          <Route path="*" element={<NotFound />} />
          {/* <Route path="/branchpage" element={<BranchPage />} /> */}
          <Route path="/createbranch" element={<CreateBranch />} />
          <Route path="/branchdetail" element={<BranchDetail />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/employeesdash/*" element={<EmployeesDashboard />} />
          {/* <Route path="/otp" element={<OtpInput />} /> */}
          <Route path="/signUp" element={<File/>} />
          <Route path="/signIn" element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

