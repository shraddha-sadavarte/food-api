import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Show from "./Views/Show/Show"
import Add from "./Views/Add/Add"

function App() {
  return(
    <div>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Show />} ></Route>
            <Route path="/Add" element={<Add />} ></Route>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
