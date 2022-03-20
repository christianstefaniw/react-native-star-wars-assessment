import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Login from '../../screens/auth/login/login';

export default function App() {
    return (
        <NativeRouter>
            <Routes>
                <Route exact path='/' element={<Login />} />
            </Routes>
        </NativeRouter>
    )
}