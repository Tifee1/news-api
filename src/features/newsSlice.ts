import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootStateType } from '../store'

export type NewsData = {
  source: { name: string }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export type InitialStateType = {
  news: NewsData[]
  loading: boolean
  error: boolean
  search: string
  page: number
  pagination: number
}

const initialState: InitialStateType = {
  news: [],
  loading: false,
  error: false,
  search: '',
  page: 1,
  pagination: 1,
}

export const fetchData = createAsyncThunk<
  { news: NewsData[]; pages: number },
  void,
  { state: RootStateType }
>('news/fetch', async (_, { getState }) => {
  const { page, search } = getState().news
  const source = 'sources=' + search

  // Fetch news from api
  const response = await axios(
    `https://newsapi.org/v2/everything?${
      search && source
    }&q=tech&sortBy=popularity&apiKey=211f160423844413902efb5f3bbcd9e7&pageSize=10&page=${page}`
  )
  const data = await response.data
  return { news: data.articles, pages: data.totalResults }
})

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    nextPage: (state) => {
      let page = state.page + 1
      if (page > 10) {
        page = 1
      }
      state.page = page
    },
    prevPage: (state) => {
      let page = state.page - 1
      if (page < 1) {
        page = 10
      }
      state.page = page
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        // Add any fetched posts to the array
        state.news = action.payload.news
        let pages = Math.ceil(action.payload.pages / 10)
        if (pages > 10) pages = 10
        state.pagination = pages
        state.loading = false
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})

export default newsSlice.reducer

export const { setSearch, setPage, prevPage, nextPage } = newsSlice.actions
