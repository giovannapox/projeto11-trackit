import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import CadastroPage from "./pages/CadastroPage/CadastroPage"
import HabitosPage from "./pages/HabitosPage/HabitosPage"
import HojePage from "./pages/HojePage/HojePage"
import HistoricoPage from "./pages/HistoricoPage/HistoricoPage"
import { useState } from "react"
import UserContext from "./context/UserContext"

export default function App() {
    const [user, setUser] = useState([]);
  return (
      <BrowserRouter>
      <UserContext.Provider value={user}>
          <Routes>
              <Route path="/" element={<LoginPage setUser={setUser}/>}/>
              <Route path="/cadastro" element={<CadastroPage />}/>
              <Route path="/habitos" element={<HabitosPage />}/>
              <Route path="/hoje" element={<HojePage />}/>
              <Route path="/historico" element={<HistoricoPage />}/>
          </Routes>
          </UserContext.Provider>
      </BrowserRouter>
  )
}

