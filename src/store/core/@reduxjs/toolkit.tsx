//import { RootStateKeyType } from '../types/injector-typings';
import {
  createSlice as createSliceOriginal,
  SliceCaseReducers,
  CreateSliceOptions,
} from "@reduxjs/toolkit";
import { RootStateKeyType } from "../types/injector-typings";

export const createSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
    Name extends RootStateKeyType
>(
  options: CreateSliceOptions<State, CaseReducers,Name>
) => {
  return createSliceOriginal(options);
};
