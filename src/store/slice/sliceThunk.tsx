import { createAsyncThunk } from '@reduxjs/toolkit'
import getInfo from '../../apis/Api'

const thunkApi = createAsyncThunk('api', async () => {
  try {
    const response = await getInfo()
    return response
  } catch {
    throw new Error()
  }
})

export default thunkApi
