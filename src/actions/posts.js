import { v4 as uuid } from 'uuid'

export const addPost = ({
    title = '',
    content = '',
    createdAt = 0
} = {}) => ({
    type: 'ADD_POST',
    post: {
        id: uuid(),
        title,
        content,
        createdAt
    }
})

export const removePost = (id) => ({
    type: 'REMOVE_POST',
    id
})

export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
})