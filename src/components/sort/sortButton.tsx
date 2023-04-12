import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { IconButton } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'

function SortButton() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [onsort, setOnOsrt] = useState(false)

  const sortIconChange = (onsort: boolean, key: string) => {
    searchParams.set('sort', key)
    setSearchParams(searchParams)
    setOnOsrt(!onsort)
  }

  if (onsort) {
    return (
      <IconButton
        variant='unstyled'
        aria-label='down'
        icon={<TriangleDownIcon />}
        onClick={() => sortIconChange(onsort, 'down')}
      />
    )
  }
  return (
    <IconButton
      variant='unstyled'
      aria-label='up'
      icon={<TriangleUpIcon />}
      onClick={() => sortIconChange(onsort, 'up')}
    />
  )
}

export default SortButton
