import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { ICurrency } from '../model/interfaceCurrency'

interface ICurrencySlice {
  currency: ICurrency[]
  loading: boolean
  error: boolean
  message: string
}

const initialState: ICurrencySlice = {
  loading: false,
  error: false,
  message: '',
  currency: []
}

export const getAllCurrency = createAsyncThunk('goods/getGoods', async _ => {
  const response = await axios.get<ICurrency>(
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
  )
  return response.data
})

const currencySlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    allCurrency: (state, action) => {
      state.currency = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getAllCurrency.pending, state => {
      state.loading = true
      state.error = false
      state.currency = []
    })
    builder.addCase(getAllCurrency.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      currencySlice.caseReducers.allCurrency(state, action)
    })
    builder.addCase(getAllCurrency.rejected, state => {
      state.loading = false
      state.error = true
      state.message = 'Something went wrong'
    })
  }
})

export const { allCurrency } = currencySlice.actions
export default currencySlice.reducer
