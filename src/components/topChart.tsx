import React from 'react'
import Ientryinfo from '../types'
import { Table, Thead, Tbody, Tr, Th, Td, Image } from '@chakra-ui/react'
import SortButton from './sort/sortButton'
import { useNavigate } from 'react-router-dom'
import { DragHandleIcon } from '@chakra-ui/icons'

function TopChart({ data }: { data: Ientryinfo[] }) {
  const navigate = useNavigate()

  const SubPageLink = (name: string) => {
    navigate(`/${name}`)
  }

  return (
    <Table
      variant='striped'
      colorScheme='gray'
      size='sm'
      flexDirection='column'
    >
      <Thead>
        <Tr display='flex'>
          <Th width='230px' display='flex' alignItems='center'>
            Song <SortButton />
          </Th>
          <Th></Th>
          <Th width='200px' display='flex' alignItems='center'>
            Artist
          </Th>
          <Th width='200px' display='flex' alignItems='center'>
            itemCount
          </Th>
          <Th width='200px' display='flex' alignItems='center'>
            price
          </Th>
          <Th width='200px' display='flex' alignItems='center'>
            상세페이지
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, idx) => (
          <Tr key={idx} display='flex' alignContent='center'>
            <Td>
              <Image src={`${item['im:image'][0].label}`} height='35px'></Image>
            </Td>
            <Td width='200px' overflow='hidden'>
              {item['im:name'].label}
            </Td>
            <Td width='200px' overflow='hidden'>
              {item['im:artist'].label}
            </Td>
            <Td width='200px'>{item['im:itemCount'].label}</Td>
            <Td width='200px'>{item['im:price'].label}</Td>
            <Td onClick={() => SubPageLink(item['im:name'].label)}>
              <DragHandleIcon />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
export default TopChart
