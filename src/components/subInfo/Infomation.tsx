import Ientryinfo from '../../types'
import {
  Box,
  Text,
  Card,
  Stack,
  Heading,
  CardBody,
  Image,
  Tag,
  Link,
} from '@chakra-ui/react'

function Information({ data }: { data: Ientryinfo[] }) {
  const datas = data[0]

  const artistLink = datas['im:artist'].attributes.href
  return (
    <main>
      <Box m='40px'>
        <Text fontSize='40px' as='b' m='50px'>
          앨범 정보
        </Text>
      </Box>

      <Card
        m='50'
        height='400px'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          maxW={{ base: '100%', sm: '200px' }}
          maxH={{ base: '100%', sm: '200px' }}
          src={`${datas['im:image'][2].label}`}
          alt='Caffe Latte'
          m='10'
        />

        <Stack>
          <CardBody m='5'>
            <Box mb='5'>
              <Heading size='lg'>{data[0]['im:name'].label}</Heading>
              <Link href={`${artistLink}`} isExternal color='green.300'>
                <Text py='1' color='green.300'>
                  {datas['im:artist'].label}
                </Text>
              </Link>
            </Box>
            <Box as='b'>
              <Text py='2'>
                Catagory:<Tag ml='2'>{datas.category.attributes.label}</Tag>
              </Text>
              <Text py='2'>
                Count:<Tag ml='2'>{datas['im:itemCount'].label}</Tag>
              </Text>
              <Text py='2'>
                Price:<Tag ml='2'>{datas['im:price'].label}</Tag>
              </Text>
              <Text py='2'>
                Price:
                <Text as='i' color='gray.400'>
                  {datas.rights.label}
                </Text>
              </Text>
              <Text py='2'>
                releaseDate:
                <Text as='i' color='gray.400'>
                  {datas['im:releaseDate'].attributes.label}
                </Text>
              </Text>
            </Box>
          </CardBody>
        </Stack>
      </Card>
    </main>
  )
}

export default Information
