import { Link, Outlet } from 'react-router-dom'
import AzureAuthButtons from '../AzureAuthButtons/AzureAuthButtons'
import { Container, Logo, MyList, MyTypography, MyButton } from './HeaderStyles'
import AppLogo from '../../../asserts/Logo/logo.662418f3.png'

type Prop = {
  matches: boolean
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const DesktopLayout = ({ matches }: Prop) => {
  return (
    <>
      <Container>
        <Logo>
          <Link to="/">
            <img src={AppLogo} alt="logo" />
          </Link>
        </Logo>
        <MyList type="horizontal">
          <MyTypography>
            <Link to="/">Home </Link>
          </MyTypography>
          <MyTypography>
            <Link to="/categories">Categories</Link>
          </MyTypography>
          <MyTypography>
            <Link to="/location">Location </Link>
          </MyTypography>
        </MyList>
        <div></div>
        <MyButton>
          <AzureAuthButtons />
        </MyButton>
      </Container>
      <Outlet />
    </>
  )
}

export default DesktopLayout
