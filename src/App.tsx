import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderLayout from './pages/HeaderLayout'
import HomePage from './pages/HomePage'
import Categories from './pages/Categories'
import Location from './pages/Location'
import Sale from './pages/Sale'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import { CssVarsProvider } from '@mui/joy'
import theme from './theme/globalStyle'
const App = () => {
  return (
    <CssVarsProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/location" element={<Location />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  )
}

export default App
