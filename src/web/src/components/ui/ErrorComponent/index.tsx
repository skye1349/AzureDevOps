import { MsalAuthenticationResult } from '@azure/msal-react'

// eslint-disable-next-line react/prop-types
const ErrorComponent: React.FC<MsalAuthenticationResult> = ({ error }) => {
  // eslint-disable-next-line react/prop-types
  return <p>An Error Occurred: {error ? error.errorCode : 'unknown error'}</p>
}
export default ErrorComponent
