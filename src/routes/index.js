import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { MainApp } from '../MainApp';
import NotFound from '../pages/Error404/NotFound';

const index = () => {
    return (
        <Routes>
            <Route path='/' element={<MainApp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default index
