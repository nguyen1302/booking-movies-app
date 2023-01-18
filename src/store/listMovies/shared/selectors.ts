import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../core/types/RootState";
import { initialState } from "./slice";

const selectReview = (state: RootState) => state?.movies || initialState;

export const selectMovie = createSelector(
  [selectReview],
  (movie) => movie.listMovies
);
