import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderLayout from './components/HeaderLayout'
import HomePage from './pages/HomePage'
import Categories from './pages/Categories'
import Location from './pages/Location'
import Sale from './pages/Sale'
import Profile from './pages/Profiles'
import { CssVarsProvider } from '@mui/joy'
import theme from './theme/globalStyle'
import { MsalProvider } from '@azure/msal-react'
import { msalInstance } from './authConfig'
import {
  EventType,
  EventMessage,
  AuthenticationResult,
} from '@azure/msal-browser'

// Account selection logic is app dependent. Adjust as needed for different use cases.
const accounts = msalInstance.getAllAccounts()
if (accounts.length > 0) {
  const activeAccount = accounts[0]
  msalInstance.setActiveAccount(activeAccount)
}

// Optional - This will update account state if a user signs in from another tab or window
msalInstance.enableAccountStorageEvents()

msalInstance.addEventCallback((event: EventMessage) => {
  if (
    (event.eventType === EventType.LOGIN_SUCCESS ||
      event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
      event.eventType === EventType.SSO_SILENT_SUCCESS) &&
    event.payload
  ) {
    const payload = event.payload as AuthenticationResult
    const account = payload.account
    msalInstance.setActiveAccount(account)
  }
})

const App = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <CssVarsProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HeaderLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/location" element={<Location />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CssVarsProvider>
    </MsalProvider>
  )
}

export default App
