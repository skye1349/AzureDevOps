import { Box, List, Typography } from '@mui/joy'
import { styled } from '@mui/joy/styles'
import { Colors } from '../../../theme/globalStyle'

type Props = {
  type: string
}

// Container
export const Container = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '1280px',
  height: '48px',
  margin: 'auto',
  padding: '16px 0',
}))

// Logo
export const Logo = styled(Box)(() => ({
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '8px',
  '& img': {
    width: '205px',
    height: '42px',
  },
}))

// List
export const MyList = styled(List)(({ type }: Props) => ({
  display: type === 'horizontal' ? 'flex' : 'block',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '0 16px',
}))

// Typography
export const MyTypography = styled(Typography)(() => ({
  display: 'flex',
  justifyContent: 'center',
  // alignItems: 'flex-start',
  // alignSelf: 'flex-start',
  margin: '0 16px',
  '& a': {
    color: Colors.headerTextColor,
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
  },
}))

// Button
export const MyButton = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
}))
