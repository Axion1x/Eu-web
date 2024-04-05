import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import studentsData from '@/app/data/database';

export const fetchMarks = createAsyncThunk('marks/fetchMarks', async () => {
    try {
        return studentsData;
    } catch (error) {
        throw Error('Failed to fetch marks');
    }
});

const marksSlice = createSlice({
    name: 'marks',
    initialState: {
        data: {},
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMarks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMarks.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMarks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default marksSlice.reducer;
export const { } = marksSlice.actions;
