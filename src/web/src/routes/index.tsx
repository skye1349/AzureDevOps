import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Categories from '../pages/Categories'
import Location from '../pages/Location'
import Sale from '../pages/Sale'
import UserPage from '../pages/UserPage'
import HeaderLayout from '../components/ui/HeaderLayout'
import ProtectedRoute from './ProtectedRoute'
import FavouritesPage from '../pages/FavouritesPage'
import Profile from '../pages/Profiles'
import NotificationPage from '../pages/NotificationPage'
import CartPage from '../pages/CartPage'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<HomePage />} />
        <Route path="categories" element={<Categories />} />
        <Route path="location" element={<Location />} />
        <Route path="sale" element={<Sale />} />
        <Route path="cart" element={<CartPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="user" element={<UserPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="lists" element={<FavouritesPage />} />
          <Route path="notification" element={<NotificationPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Pages
