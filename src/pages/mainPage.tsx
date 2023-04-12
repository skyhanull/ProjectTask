import { useCallback, useEffect } from 'react'
import TopChart from '../components/topChart'
import { TableContainer, Box, Flex, Text } from '@chakra-ui/react'
import NameSearch from '../components/search/nameSearch'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setlist } from '../store/slice/musicSlice'
import { AppDispatch, RootState } from '../store/store'

function MainPage() {
  const [searchParams] = useSearchParams()

  const ListAllData = useSelector((state: RootState) => state.musicSlice)

  const filterData =
    ListAllData.itemfilter.entry.length > 0
      ? ListAllData.itemfilter.entry
      : ListAllData.result.entry

  const dispatch = useDispatch<AppDispatch>()

  const ChangeHanlder = useCallback(() => {
    const nameInput =
      searchParams.get('name') === null ? '' : searchParams.get('name')
    const sortButton =
      searchParams.get('sort') === null ? 'up' : searchParams.get('sort')

    const musicEntry = ListAllData.result.entry

    const dispalyData = {
      sortButton,
      nameInput,
      musicEntry,
    }
    dispatch(setlist(dispalyData))
  }, [searchParams, ListAllData.result])

  useEffect(() => {
    ChangeHanlder()
  }, [ChangeHanlder])

  return (
    <Box h='100vh' overflowY='scroll'>
      <Text fontSize='5xl' as='b'>
        {ListAllData.result.title.label}
      </Text>
      <Flex flex={1}>
        <TableContainer>
          <NameSearch />
          <TopChart data={filterData} />
        </TableContainer>
      </Flex>
    </Box>
  )
}

export default MainPage
