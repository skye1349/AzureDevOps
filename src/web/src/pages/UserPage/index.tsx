import { Link } from 'react-router-dom'
import { Box, List } from '@mui/joy/'

const UserPage = () => {
  return (
    <Box>
      <List>
        <Link to="/lists">Check my favourite farms</Link>
      </List>
      <List>
        <Link to="/profile">Profile Information</Link>
      </List>
    </Box>
  )
}

export default UserPage
