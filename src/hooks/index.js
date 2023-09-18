import { useDispatch, useSelector } from "react-redux"
import { DataAction } from "../common/createAction"

export const useHooks = () => {
    const dispatch = useDispatch()
    const list = useSelector(state => state.breadcrumbReducer.list)

    const handleSetBreadcrumb = (payload) => dispatch(DataAction.setData(payload))

    return { list, handleSetBreadcrumb }
}

