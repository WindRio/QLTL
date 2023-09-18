import { combineReducers } from 'redux'
import breadcrumbReducer from './breadcrumb'

export default combineReducers({
    breadcrumbReducer: breadcrumbReducer,
})