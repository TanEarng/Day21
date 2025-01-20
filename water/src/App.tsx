
import './App.css'
import Water from './page/Water'
import { Routes,Route } from 'react-router'


function App() {
 
  return (
    <>
      <Routes>
        <Route path="/water" element={<Water></Water>}></Route>
      </Routes>
        
    </>
  )
}

export default App
