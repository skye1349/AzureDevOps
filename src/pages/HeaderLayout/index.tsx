import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Box, List, ListItemText } from '@mui/material'
const HeaderLayout = () => {
  return (
    <>
      <Box>
        <List
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Link to="/">
            <ListItemText primary="Home" />
          </Link>
          <Link to="/categories">
            <ListItemText primary="Categories" />
          </Link>
          <Link to="/location">
            <ListItemText primary=" Location" />
          </Link>
          <Link to="/register">
            <ListItemText primary=" Register" />
          </Link>
          <Link to="/login">
            <ListItemText primary=" Login" />
          </Link>
        </List>
      </Box>
      <Outlet />
    </>
  )
}

export default HeaderLayout
