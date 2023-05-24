import { useMsal } from '@azure/msal-react'
import { signIn, logOut } from '../../utils/AzureB2CService'

const AzureAuthButtons = () => {
  const { instance } = useMsal()
  const activeAccount = instance.getActiveAccount()

  const handleSignIn = async () => {
    await signIn(instance)
  }

  const handleLogout = () => {
    logOut(instance)
  }
  return (
    <div>
      {activeAccount ? (
        <div>
          {activeAccount.name} <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>User</button>
      )}
    </div>
  )
}
export default AzureAuthButtons
