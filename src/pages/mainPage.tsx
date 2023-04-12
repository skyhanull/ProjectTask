import { useCallback, useEffect, useState } from 'react'
import React from 'react'
import getInfo from '../apis/Api'
import TopChart from '../components/topChart'
import Ientryinfo from '../types'
import { TableContainer } from '@chakra-ui/react'
import NameSearch from '../components/search.tsx/nameSearch'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setlist } from '../store/slice/musicSlice'
import { AppDispatch, RootState } from '../store/store'

function MainPage() {
  const [searchParams] = useSearchParams()
  // const [musicEntry, setMusicEntry] = useState<Ientryinfo[]>([])
  const tripFilter = useSelector((state: RootState) => state.musicSlice)

  const filterData =
    tripFilter.itemfilter.length > 0 ? tripFilter.itemfilter : tripFilter.result

  const dispatch = useDispatch<AppDispatch>()
  // console.log(tripFilter.result)
  // useEffect(() => {
  //   const tripApi = async () => {
  //     try {
  //       const response = await getInfo()
  //       setMusicEntry(response.entry)
  //     } catch {
  //       throw new Error()
  //     }
  //   }
  //   tripApi()
  // }, [])

  const ChangeHanlder = useCallback(() => {
    const nameInput =
      searchParams.get('name') === null ? '' : searchParams.get('name')
    const sortButton =
      searchParams.get('sort') === null ? 'up' : searchParams.get('sort')

    const musicEntry = tripFilter.result

    const dispalyData = {
      sortButton,
      nameInput,
      musicEntry,
    }
    dispatch(setlist(dispalyData))
  }, [searchParams, tripFilter.result])

  useEffect(() => {
    ChangeHanlder()
  }, [ChangeHanlder])

  return (
    <TableContainer>
      <NameSearch />
      <TopChart data={filterData} />
    </TableContainer>
  )
}

export default MainPage
