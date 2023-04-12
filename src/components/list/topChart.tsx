import React from 'react'
import Ientryinfo from '../../types'
import { Table, Thead, Tbody, Tr, Th, Td, Image, Flex } from '@chakra-ui/react'
import SortButton from '../sort/sortButton'
import { useNavigate } from 'react-router-dom'

function TopChart({ data }: { data: Ientryinfo[] }) {
  const navigate = useNavigate()

  const SubPageLink = (name: string) => {
    navigate(`/${name}`)
  }

  return (
    <Table variant='striped' colorScheme='gray' size='sm'>
      <Thead>
        <Tr display='flex'>
          <Th width='17rem' display='flex' alignItems='center'>
            Song <SortButton />
          </Th>
          <Th></Th>
          <Th width='15rem' display='flex' alignItems='center'>
            Artist
          </Th>
          <Th width='10rem' display='flex' alignItems='center'>
            itemCount
          </Th>
          <Th width='10rem' display='flex' alignItems='center'>
            price
          </Th>
          <Th width='10rem' display='flex' alignItems='center'>
            releaseDate
          </Th>
        </Tr>
      </Thead>

      <Tbody>
        {data.map((item, idx) => (
          <Tr
            key={idx}
            display='flex'
            alignContent='center'
            onClick={() => SubPageLink(item['im:name'].label)}
          >
            <Td>
              <Image src={`${item['im:image'][0].label}`} height='35px'></Image>
            </Td>
            <Td width='15rem' overflow='hidden'>
              {item['im:name'].label}
            </Td>
            <Td width='15rem' overflow='hidden'>
              {item['im:artist'].label}
            </Td>
            <Td width='10rem'>{item['im:itemCount'].label}</Td>
            <Td width='10rem'>{item['im:price'].label}</Td>
            <Td width='13rem'>{item['im:releaseDate'].attributes.label}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
export default TopChart
