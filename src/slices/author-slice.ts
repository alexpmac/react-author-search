import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Author, getAuthors } from '../app/api';
import { RootState } from '../app/store';

export interface AuthorState {
	value: {
		authors: Author[];
		results: number | undefined;
	}
	status: "idle" | "loading" | "failed"
}

const initialState: AuthorState = {
	value: {
		authors: [],
		results: undefined
	},
	status: "idle",
}

export const getAuthorsAsync = createAsyncThunk(
	"authors/getAuthors",
	getAuthors,
)

export const authorSlice = createSlice({
	name: "authors",
	initialState,
	reducers: {
		reset: (state) => {
				state.value = {
					authors: [],
					results: undefined
				}
			},
		},
	extraReducers: (builder) => {
		builder
		.addCase(getAuthorsAsync.pending, (state) => {
			state.status = "loading";
		})
		.addCase(getAuthorsAsync.fulfilled, (state, action) => {
			state.status = "idle";
			state.value = {
				authors: action.payload.docs,
				results: action.payload.numFound
			}
		})
		.addCase(getAuthorsAsync.rejected, (state) => {
			state.status = "failed";
		})
	},
})

export const selectAuthors = (state: RootState) => state.authors;
