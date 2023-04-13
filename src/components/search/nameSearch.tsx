import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useState } from 'react'
import { KeyboardEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CloseIcon } from '@chakra-ui/icons'

function NameSearch() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [name, setName] = useState('')

  const keypressHandler = () => {
    searchParams.set('name', name)
    setSearchParams(searchParams)
  }

  const submitHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      keypressHandler()
    }
  }

  const resetHandler = () => {
    setName('')
    searchParams.set('name', name)
    setSearchParams(searchParams)
  }
  return (
    <InputGroup>
      <Input
        w='300px'
        type='text'
        placeholder='Search'
        onChange={e => setName(e.target.value)}
        defaultValue={name}
        onKeyPress={submitHandler}
      />
      <InputLeftElement>
        <CloseIcon onClick={resetHandler} />
      </InputLeftElement>
    </InputGroup>
  )
}

export default NameSearch
