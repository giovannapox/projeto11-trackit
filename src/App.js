export default function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage setInfoFilme={setInfoFilme} />}/>
              <Route path="/sessoes/:idFilme" element={<SessionsPage />}/>
              <Route path="/assentos/:idSessao" element={<SeatsPage infoFilme={infoFilme} setInfoFilme={setInfoFilme}/>}/>
              <Route path="/sucesso" element={<SuccessPage infoFilme={infoFilme}/>}/>
          </Routes>
      </BrowserRouter>
  )
}
