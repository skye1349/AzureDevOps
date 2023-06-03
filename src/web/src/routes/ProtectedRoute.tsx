import { Outlet } from 'react-router-dom'
import { InteractionType } from '@azure/msal-browser'
import { MsalAuthenticationTemplate } from '@azure/msal-react'
import { loginRequest } from '../authConfig'

import Loading from '../components/ui/Loading'
import ErrorComponent from '../components/ui/ErrorComponent'

const ProtectedRoute = () => {
  const authRequest = {
    ...loginRequest,
  }

  return (
    <>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        authenticationRequest={authRequest}
        errorComponent={ErrorComponent}
        loadingComponent={Loading}
      >
        <Outlet />
      </MsalAuthenticationTemplate>
    </>
  )
}

export default ProtectedRoute
