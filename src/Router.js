import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Vehiculos from './Vehiculos/vehiculos';
const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Vehiculos />} />
            <Route path="/inicio" element={<Vehiculos />} />

        </Routes>
    </BrowserRouter>
) 
export default Router;