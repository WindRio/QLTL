import { all } from 'redux-saga/effects'
import breadcrumbSaga from './breadcrumb'

export default function* rootSaga() {
    yield all([
        ...breadcrumbSaga
    ])
}