import { createSlice } from '@reduxjs/toolkit'

const initialState: Record<string, string> = {
    type: '전체',
    keyword: '',
    limit: '10',
    page: '1',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        options: (state, action) => {
            state.type = action.payload.type
            state.keyword = action.payload.keyword
            state.limit = action.payload.limit
            state.page = action.payload.page
        },
    },
})

export const { options } = searchSlice.actions
export default searchSlice.reducer
