import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import DesktopLayout from './DesktopLayout'
import MobileLayout from './MobleLayout'

const HeaderLayout = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      {matches ? (
        <DesktopLayout matches={matches} />
      ) : (
        <MobileLayout matches={matches} />
      )}
    </>
  )
}

export default HeaderLayout
