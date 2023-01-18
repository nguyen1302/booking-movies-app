import { createSlice } from "../../core/@reduxjs/toolkit";

export interface CreateMovieState {
  listMovies?: any;
  loading?: boolean;
}

export const initialState: CreateMovieState = {
  listMovies: {},
  loading: false
};

const CreateMovieSlice = createSlice({
  name:'movies',
  initialState,
  reducers: {
    getListMovie(state: any) {
      state.loading = true;
    },
    getListMovieSuccess(state, action) {
      state.loading = false;
      state.listMovies = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = CreateMovieSlice;
