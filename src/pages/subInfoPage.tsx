import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useParams } from 'react-router-dom'
import Information from '../components/subInfo/Infomation'
import { Box } from '@chakra-ui/react'

function SubInfoPage() {
  const ListAllData = useSelector((state: RootState) => state.musicSlice)
  const { id } = useParams()
  const DataFilter = ListAllData.result.entry.filter(
    el => el['im:name'].label === id
  )

  return (
    <Box w='80%'>
      <Information data={DataFilter} />
    </Box>
  )
}

export default SubInfoPage
