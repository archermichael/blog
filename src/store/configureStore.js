import { createStore, combineReducers } from 'redux'
import postsReducer from '../reducers/posts'
import filtersReducer from '../reducers/filters'

const configureStore = () => {
    const store = createStore(
        combineReducers({
            posts: postsReducer,
            filters: filtersReducer
        })
    )

    return store
}

export default configureStore