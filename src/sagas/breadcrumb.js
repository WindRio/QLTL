import { put, takeEvery } from 'redux-saga/effects'
import { SET_DATA } from '../common/types'
import { DataAction } from '../common/createAction.ts'

const setBreadcrumbs = async ({payload}) => {
    console.log(payload, "saga")
    await put(DataAction.setData(payload));
}

const breadcrumbSaga = [
    takeEvery(SET_DATA, setBreadcrumbs),
]

export default breadcrumbSaga;