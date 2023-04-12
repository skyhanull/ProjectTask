import { createSlice } from '@reduxjs/toolkit'
import sliceThunk from './sliceThunk'
import Ientryinfo from '../../types'

const result: Ientryinfo[] = []
const itemfilter: Ientryinfo[] = []

export const tripSlice = createSlice({
  name: 'tripSlice',
  initialState: { result, itemfilter },
  reducers: {
    setlist: (state, action) => {
      console.log(action.payload)
      const {
        sortButton,
        nameInput,
        musicEntry,
      }: { sortButton: string; nameInput: string; musicEntry: Ientryinfo[] } =
        action.payload

      const nameInputData = nameInput
        ? musicEntry.filter(
            (el: any) =>
              el['im:name'].label.includes(action.payload.nameInput) === true
          )
        : musicEntry

      const sortButtonData =
        sortButton === 'down'
          ? [...musicEntry].sort((prev, cur) => {
              return prev.title > cur.title ? -1 : 1
            })
          : [...musicEntry].sort((prev, cur) => {
              return prev.title > cur.title ? 1 : -1
            })

      const filteredAll = sortButtonData.filter(x1 =>
        nameInputData.some(x2 => x1['im:name'].label === x2['im:name'].label)
      )

      state.itemfilter = filteredAll
    },

    filterprice: (state, action) => {
      state.itemfilter = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(sliceThunk.fulfilled, (state, action) => {
      state.result = action.payload
    })
  },
})

export const { setlist, filterprice } = tripSlice.actions
// store에서 add, remove, complte 액션을 내보낸다.
export default tripSlice.reducer
