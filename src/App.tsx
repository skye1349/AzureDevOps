import { BrowserRouter } from 'react-router-dom'
import { CssVarsProvider } from '@mui/joy'
import { MsalProvider } from '@azure/msal-react'
import { msalInstance } from './authConfig'
import {
  EventType,
  EventMessage,
  AuthenticationResult,
} from '@azure/msal-browser'
import theme from './theme/globalStyle'
import Pages from './routes'

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
    <CssVarsProvider theme={theme}>
      <BrowserRouter>
        <MsalProvider instance={msalInstance}>
          <Pages />
        </MsalProvider>
      </BrowserRouter>
    </CssVarsProvider>
  )
}

export default App
