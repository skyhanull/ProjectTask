import React from 'react'
import Ientryinfo from '../types'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react'
import SortButton from '../components/sort/sortBurron'
import { Link } from 'react-router-dom'

function TopChart({ data }: { data: Ientryinfo[] }) {
  console.log(data)
  return (
    <Table variant='striped' colorScheme='teal' size='sm'>
      <Thead>
        <Tr>
          <Th>image</Th>
          <Th>
            Title <SortButton />
          </Th>
          <Th>Artist</Th>
          <Th>itemCount</Th>
          <Th>price</Th>
          <Th></Th>
          <Th>상세페이지</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, idx) => (
          <Tr key={idx}>
            {/* <Td>{item['im:artist'].label}</Td> */}
            <Td>{item['im:name'].label}</Td>
            <Td>{item['im:artist'].label}</Td>
            <Td>{item['im:itemCount'].label}</Td>
            <Td>{item['im:price'].label}</Td>
            {/* <Link to='/idx'>
              <Button>ddd</Button>
            </Link> */}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
export default TopChart
