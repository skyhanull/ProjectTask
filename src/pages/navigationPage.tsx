import { Box, Flex, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { RootState } from '../store/store'

function NavigationPage() {
  const ListAllData = useSelector((state: RootState) => state.musicSlice)
  return (
    <Flex>
      <Box height='100vh' width='20%' backgroundColor='gray.300'>
        <Link to='/'>
          <Flex width='100%' justify='center' direction='row'>
            <img
              src={`${ListAllData.result.icon.label}`}
              height='40px'
              width='40px'
            ></img>
            <Text as='b' fontSize='1.5rem'>
              ELMusic
            </Text>
          </Flex>
        </Link>
      </Box>
      <Outlet />
    </Flex>
  )
}

export default NavigationPage
