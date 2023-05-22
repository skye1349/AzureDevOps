import React from 'react'
import { Link } from 'react-router-dom'
import List from '@mui/material/List'
const HeaderLayout = () => {
  return (
    <>
      <List>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/location">Location</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </List>
    </>
  )
}

export default HeaderLayout
