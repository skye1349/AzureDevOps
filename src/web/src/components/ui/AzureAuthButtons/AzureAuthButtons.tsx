import { Link } from 'react-router-dom'
import { useMsal } from '@azure/msal-react'
import { signIn, logOut } from '../../../utils/AzureB2CService'
import { Colors } from '../../../theme/globalStyle'
import { styled } from '@mui/joy/styles'
import { Button, IconButton, Typography } from '@mui/joy'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {
  setLocalAccountId,
  clearLocalAccountId,
} from '../../../redux/userLoginSlice'

// Container
const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  [theme.breakpoints.down('md')]: {
    gap: '1px',
  },
}))

// IconButton
const MyIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: Colors.primary,
  border: 'none',
  color: 'grey',
  fontSize: '1.5rem',
  flexGrows: 1,
  textDecoration: 'none',
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
    flexGrows: 0,
  },
  '&.user-btn': {
    display: 'flex',
    columnGap: '5px',
    padding: '0 5px',
  },
})) as typeof IconButton

// name style
const Name = styled(Typography)(({ theme }) => ({
  '& a': {
    color: Colors.headerTextColor,
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
  },
  [theme.breakpoints.down('md')]: {
    '& a': {
      fontSize: '14px',
    },
  },
}))

// Logout button
const LogoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: Colors.logoutButtonColor,
  '&:hover': { backgroundColor: Colors.hoverLogoutButtonColor },
  [theme.breakpoints.down('md')]: {
    width: '50px',
    height: '30px',
    fontSize: '11px',
  },
}))

const AzureAuthButtons = () => {
  const { instance } = useMsal()
  const activeAccount = instance.getActiveAccount()
  const dispatch = useDispatch()
  const handleSignIn = async () => {
    await signIn(instance)
  }

  const handleLogout = () => {
    logOut(instance)
    dispatch(clearLocalAccountId()) // Dispatch the clearLocalAccountId action
  }

  // Update the localAccountId when activeAccount changes
  useEffect(() => {
    if (activeAccount) {
      const { username, localAccountId } = activeAccount
      dispatch(setLocalAccountId({ username, localAccountId })) // Dispatch the setLocalAccountId action
    }
  }, [activeAccount, dispatch])

  return (
    <div>
      {activeAccount ? (
        <Container>
          <MyIconButton component={Link} to="/cart">
            <LocalGroceryStoreIcon />
          </MyIconButton>
          <MyIconButton component={Link} to="/notification">
            <NotificationsIcon />
          </MyIconButton>
          <MyIconButton component={Link} to="/user" className="user-btn">
            <PersonIcon /> <Name>{activeAccount.name}</Name>
          </MyIconButton>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </Container>
      ) : (
        <Button sx={{ marginLeft: '20px' }} onClick={handleSignIn}>
          Sign in
        </Button>
      )}
    </div>
  )
}
export default AzureAuthButtons
