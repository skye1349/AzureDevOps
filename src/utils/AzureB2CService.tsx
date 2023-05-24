import { IPublicClientApplication } from '@azure/msal-browser'
import { loginRequest } from '../authConfig'

const signIn = async (msalInstance: IPublicClientApplication) => {
  try {
    await msalInstance.loginRedirect(loginRequest)
  } catch (error) {
    console.log('Error signing in:', error)
  }
}

const logOut = (msalInstance: IPublicClientApplication) => {
  msalInstance.logoutRedirect()
}
export { signIn, logOut }
