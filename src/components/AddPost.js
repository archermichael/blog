import React from 'react'

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    alert("New post created")
}

const AddPost = (props) => (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-post-title">Title: </label>
            <input type="text" name="new-post-title" id="new-post-title" />
            <label htmlFor="new-post-body">Body: </label>
            <input type="text" name="new-post-body" id="new-post-body" />
            <label htmlFor="new-post-image">Image: </label>
            <input type="file" name="new-post-image" id="new-post-image" />
        </form>
    </div>
)

export default AddPost