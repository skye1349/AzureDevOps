import React, { useState } from 'react'
import { styled } from '@mui/joy/styles'
import { Colors } from '../../theme/globalStyle'
import { Logo } from './HeaderStyles'
import { Box, IconButton } from '@mui/joy'
import WidgetsIcon from '@mui/icons-material/Widgets'
import AppLogo from '../../asserts/Logo/logo.662418f3.png'
import AzureAuthButtons from '../AzureAuthButtons/AzureAuthButtons'

type Prop = {
  matches: boolean
}

// Container
const Container = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  justifyContent: 'center',
  maxWidth: '1280px',
  height: '48px',
  margin: 'auto',
  padding: '16px 0',
}))

// IconButton
const MyIconButton = styled(IconButton)(() => ({
  backgroundColor: Colors.primary,
  color: 'grey',
  border: 'none',
  marginBottom: '8px',
  '&:hover': {
    backgroundColor: Colors.primary,
  },
}))

const MobleLayout = ({ matches }: Prop) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  return (
    <Container>
      <MyIconButton onClick={handleDrawerOpen}>
        <WidgetsIcon />
      </MyIconButton>
      <Logo sx={{ marginTop: '5px' }}>
        <img src={AppLogo} alt="logo" />
      </Logo>
      <AzureAuthButtons />
    </Container>
  )
}

export default MobleLayout
