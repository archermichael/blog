const postsReducer =  (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.post]
        case 'REMOVE_POST':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_POST':
            return state.map(post => post.id === action.id ? { ...post, ...action.updates} : post)
        default:
            return state
    }
}

export default postsReducer