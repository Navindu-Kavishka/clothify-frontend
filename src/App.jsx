
import { Route, Routes } from 'react-router-dom'
import ClientRouters from './Routers/ClientRouters'


function App() {

  return (
    <>
      <div>

        <Routes>
          <Route path="/*" element={<ClientRouters />} ></Route>
        </Routes>
        
      </div>
    </>
  )
}

export default App
