import React from 'react';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material'

const App = () => {
    return (
        <Box width="400px">App
            Navbar
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<exerciseDetails />} />
            </Routes>
        </Box>
    )
}

export default App