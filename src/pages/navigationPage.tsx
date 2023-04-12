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
          <Box
            width='100%'
            display='flex'
            justifyContent='center'
            flexDirection='row'
          >
            <img
              src={`${ListAllData.result.icon.label}`}
              height='40px'
              width='40px'
            ></img>
            <Text as='b' fontSize='28px'>
              ELMusic
            </Text>
          </Box>
        </Link>
      </Box>

      <Outlet />
    </Flex>
  )
}

export default NavigationPage
