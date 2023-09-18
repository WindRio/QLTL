import { createAction } from "@reduxjs/toolkit";
import {GET_DATA, SET_DATA} from './types'

export const DataAction = {
    getData: createAction(GET_DATA),
    setData: createAction(SET_DATA),
}