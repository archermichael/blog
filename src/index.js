import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisiblePosts from './selectors/selectPosts'
import { addPost, removePost, editPost } from './actions/posts'
import { setTextFilter, setStartDate, setEndDate } from './actions/filters'
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import reportWebVitals from './reportWebVitals'

const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    console.log(getVisiblePosts(state.posts, state.filters))
})

store.dispatch(addPost({title: 'First Blog Post', content: 'This is some placeholder content', createdAt: 100}))

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
        <AppRouter />
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(jsx, document.getElementById('root'))
reportWebVitals();