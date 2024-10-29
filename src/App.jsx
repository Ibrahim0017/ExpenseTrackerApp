
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminSignup from "./pages/EmployeePages/AdminSignup";
import AdminSignin from "./pages/EmployeePages/AdminSignin";
import EmployeePage from "./pages/EmployeePages/EmployeePage";
import CreateEmployee from "./components/EmployeeComponents/CreateEmployee";
import EmployeeDetail from "./pages/EmployeePages/EmployeeDetail";
import './App.css'
import AdminDashboard from './pages/Admin Pages/AdminDashboard'
import BranchPage from "./pages/EmployeePages/BranchPage";
import CreateBranch from "./components/EmployeeComponents/CreateBranch";
import BranchDetail from "./pages/EmployeePages/BranchDetail";
import File from './service/File'
import AdminExpensePage from './pages/admin_expense/AdminExpensePage'
import ExpenseDetail from './pages/admin_expense/adminexpensedetail/ExpenseDetail'
>>>>>>> 21ddea97b514fa5e6e60bcdde87c77f3d6245ba5

function App() {
  return (
    <>
      
      <AdminDashboard />
      {/* </Routes>
>>>>>>> 21ddea97b514fa5e6e60bcdde87c77f3d6245ba5
      
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminSignup/>} />
          <Route path="/adminsignin" element={<AdminSignin />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/createemployee" element={<CreateEmployee />} />
          <Route path="/employeedetail" element={<EmployeeDetail />} />
          <Route path="/branchpage" element={<BranchPage />} />
          <Route path="/createbranch" element={<CreateBranch />} />
          <Route path="/branchdetail" element={<BranchDetail />} />
          <Route path='signup' element={<File/>}/>
      <Route path='admin_expense_page' element={<AdminExpensePage/>}/>
      <Route path='expense_detail' element={<ExpenseDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

