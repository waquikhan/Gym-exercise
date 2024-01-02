import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'


import Home from './Pages/Home'
import "./App.css"
import ExerciseDetails from './Pages/ExerciseDetails'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto" >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetails  />} />
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App
