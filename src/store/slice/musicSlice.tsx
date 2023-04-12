import { createSlice } from '@reduxjs/toolkit'
import sliceThunk from './sliceThunk'
import Ientryinfo from '../../types'

interface IALLInfo {
  title: { label: string }
  entry: Ientryinfo[]
  icon: { label: string }
}

const result: IALLInfo = {
  title: { label: '' },
  entry: [],
  icon: { label: '' },
}

const itemfilter: IALLInfo = {
  title: { label: '' },
  entry: [],
  icon: { label: '' },
}

export const tripSlice = createSlice({
  name: 'tripSlice',
  initialState: { result, itemfilter },
  reducers: {
    setlist: (state, action) => {
      const {
        sortButton,
        nameInput,
        musicEntry,
      }: { sortButton: string; nameInput: string; musicEntry: Ientryinfo[] } =
        action.payload

      const nameInputData = nameInput
        ? musicEntry.filter(
            el =>
              el['im:name'].label
                .toLowerCase()
                .includes(action.payload.nameInput.toLowerCase()) === true
          )
        : musicEntry

      const sortButtonData =
        sortButton === 'down'
          ? [...musicEntry].sort((prev, cur) => {
              return prev.title.label > cur.title.label ? -1 : 1
            })
          : [...musicEntry].sort((prev, cur) => {
              return prev.title.label > cur.title.label ? 1 : -1
            })

      const filteredAll = sortButtonData.filter(x1 =>
        nameInputData.some(x2 => x1['im:name'].label === x2['im:name'].label)
      )

      state.itemfilter.entry = filteredAll
    },
  },
  extraReducers: builder => {
    builder.addCase(sliceThunk.fulfilled, (state, action) => {
      state.result = action.payload
    })
  },
})

export const { setlist } = tripSlice.actions
export default tripSlice.reducer
