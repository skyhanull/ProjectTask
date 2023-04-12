import { Badge, Box, Button, Stack, Flex, Spacer, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { RootState } from '../store/store'

function NavigationPage() {
  const ListAllData = useSelector((state: RootState) => state.musicSlice)
  return (
    <Flex display='flex' flexDirection='row'>
      <Box height='100vh' width='250px' display='flex' flexDirection='row'>
        <Link to='/main' style={{ height: '100%', padding: '25px' }}>
          <img src={`${ListAllData.result.icon.label}`}></img>
        </Link>
        <Text>Music</Text>
      </Box>
      <Outlet />
    </Flex>
  )
}

export default NavigationPage
