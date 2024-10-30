import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSignup from "./pages/EmployeePages/AdminSignup";
import AdminSignin from "./pages/EmployeePages/AdminSignin";
import EmployeePage from "./pages/EmployeePages/EmployeePage";
import CreateEmployee from "./components/EmployeeComponents/CreateEmployee";
import EmployeeDetail from "./pages/EmployeePages/EmployeeDetail";
import AdminDashboard from "./pages/Admin Pages/AdminDashboard";
import NotFound from "./pages/Admin Pages/NotFound";
import BranchPage from "./pages/EmployeePages/BranchPage";
import CreateBranch from "./components/EmployeeComponents/CreateBranch";
import BranchDetail from "./pages/EmployeePages/BranchDetail";
import File from "./service/File";
import AdminExpensePage from "./pages/admin_expense/AdminExpensePage";
import ExpenseDetail from "./pages/admin_expense/adminexpensedetail/ExpenseDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/adminsignup" element={<AdminSignup />} />
          <Route path="/adminsignin" element={<AdminSignin />} />

          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/branchpage" element={<BranchPage />} />
          <Route path="/createbranch" element={<CreateBranch />} />
          <Route path="/branchdetail" element={<BranchDetail />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

