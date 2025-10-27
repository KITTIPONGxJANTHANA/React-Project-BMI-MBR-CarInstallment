import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import BMR from "./component/BMR";
import BMI from "./component/Bmi";
import Car from "./component/Car";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/BMR' element={<BMR />} />
          <Route path='/BMI' element={<BMI />} />
          <Route path='/Car' element={<Car />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App