import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminSignup from "./pages/EmployeePages/AdminSignup";
import AdminSignin from "./pages/EmployeePages/AdminSignin";
import EmployeePage from "./pages/EmployeePages/EmployeePage";
import CreateEmployee from "./components/EmployeeComponents/CreateEmployee";
import EmployeeDetail from "./pages/EmployeePages/EmployeeDetail";
import AdminDashboard from './pages/Admin Pages/AdminDashboard'
import NotFound from "./pages/Admin Pages/NotFound";
import CreateBranch from "./components/EmployeeComponents/CreateBranch";
import ExpenseEdit from "./components/EmployeeComponents/ExpenseEdit";
import OtpInput from "./components/EmployeeComponents/OtpInput";

function App() {
  return (
    <>
      {/* <BrowserRouter>

      <Routes> */}
      <AdminDashboard />
      {/* </Routes>
      
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AdminSignup/>} />
          <Route path="/adminsignin" element={<AdminSignin />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/createemployee" element={<CreateEmployee />} />
          <Route path="/employeedetail" element={<EmployeeDetail />} />
          <Route path="*" element={<NotFound />} />
         
          <Route path="/createbranch" element={<CreateBranch />} />
          
          <Route path="/expenseedit" element={<ExpenseEdit />} />
          <Route path="/otpinput" element={<OtpInput />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
