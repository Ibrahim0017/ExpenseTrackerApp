import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminSignup from "./pages/EmployeePages/AdminSignup";
import AdminSignin from "./pages/EmployeePages/AdminSignin";
import EmployeePage from "./pages/EmployeePages/EmployeePage";
import CreateEmployee from "./components/EmployeeComponents/CreateEmployee";
import EmployeeDetail from "./pages/EmployeePages/EmployeeDetail";
import './App.css'
import AdminDashboard from './pages/Admin Pages/AdminDashboard'
import NotFound from "./pages/Admin Pages/NotFound";

function App() {
  return (
    <>
      {/* <BrowserRouter>

      <Routes> */}
      <AdminDashboard />
      {/* </Routes>
      
      </BrowserRouter> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminSignup/>} />
          <Route path="/adminsignin" element={<AdminSignin />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/createemployee" element={<CreateEmployee />} />
          <Route path="/employeedetail" element={<EmployeeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
