import Ientryinfo from '../../types'
import {
  TableContainer,
  Box,
  Flex,
  Text,
  Center,
  Wrap,
  Card,
  Stack,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Image,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Information({ data }: { data: Ientryinfo[] }) {
  return (
    <main>
      <Box m='40px'>
        <Text fontSize='40px' as='b' m='50px'>
          앨범 정보
        </Text>
      </Box>

      <Card
        m='50'
        height='500px'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          maxW={{ base: '100%', sm: '200px' }}
          maxH={{ base: '100%', sm: '200px' }}
          src={`${data[0]['im:image'][0].label}`}
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='lg'>{data[0]['im:name'].label}</Heading>
            {/* <Link to={`${data[0]['im:artist'].attributes.href}`}>
              <Text py='1'>{data[0]['im:artist'].label}</Text>
            </Link> */}
            <Text py='1'>{data[0]['im:artist'].label}</Text>
            <Box>
              <Text py='2'> Catagory:{data[0].category.attributes.label}</Text>
              <Text py='2'> Catagory:{data[0].category.attributes.label}</Text>
              <Text py='2'> Catagory:{data[0].category.attributes.label}</Text>
            </Box>
          </CardBody>

          <CardFooter>
            <Button variant='solid' colorScheme='blue'>
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </main>
  )
}

export default Information
