import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login';
import Landing from './pages/Landing';
import { useState } from 'react';





function App(){

  const [user, setuser] = useState([
        {uname: "richie", upass:"123"}
    ])

  return(
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login user={user} setuser={setuser}></Login>}></Route>
      <Route path='/signup' element={<Signup user={user} setuser={setuser}></Signup>}></Route>
      <Route path='/landing' element={<Landing></Landing>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App

