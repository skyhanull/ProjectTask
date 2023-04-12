import { Input } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { KeyboardEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

function NameSearch() {
  const nameTextInputRef = useRef<HTMLInputElement>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [name, setName] = useState('')

  const keypre = () => {
    // setName(enteredText)
    searchParams.set('name', name)
    setSearchParams(searchParams)
  }

  // const submitHandler = (e: KeyboardEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   if (e.key === 'Enter' && nameTextInputRef.current) {
  //     const enteredText = nameTextInputRef.current.value
  //     console.log(enteredText)
  //     setName(enteredText)
  //     searchParams.set('name', enteredText)
  //     setSearchParams(searchParams)
  //   }
  // }

  const submitHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      keypre()
    }
  }
  return (
    <div>
      <Input
        pr='4.5rem'
        type='text'
        placeholder='Customer Name'
        // ref={nameTextInputRef}
        onChange={e => setName(e.target.value)}
        defaultValue={name}
        onKeyPress={submitHandler}
      />
    </div>
  )
}

export default NameSearch
