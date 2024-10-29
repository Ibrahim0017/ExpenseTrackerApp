import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import File from './service/File'
import AdminExpensePage from './pages/admin_expense/AdminExpensePage'
import ExpenseDetail from './pages/admin_expense/adminexpensedetail/ExpenseDetail'

function App() {
  return (
    <>
      <BrowserRouter>

      <Routes>
      <Route path='signup' element={<File/>}/>
      <Route path='admin_expense_page' element={<AdminExpensePage/>}/>
      <Route path='expense_detail' element={<ExpenseDetail/>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App