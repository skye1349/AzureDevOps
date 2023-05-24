import { Link, Outlet } from 'react-router-dom'
import { Box, List } from '@mui/joy/'
import AzureAuthButtons from '../AzureAuthButtons/AzureAuthButtons'
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
            <span>Home</span>
          </Link>
          <Link to="/categories">
            <span>Categories</span>
          </Link>
          <Link to="/location">
            <span>Location</span>
          </Link>
          <AzureAuthButtons />
        </List>
      </Box>
      <Outlet />
    </>
  )
}

export default HeaderLayout
