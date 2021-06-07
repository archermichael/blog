import React from 'react'

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    alert("Old content has been replaced by new content")
}

const EditPost = (props) => (
    <div>
        <form onSubmit={handleSubmit}>
            <label for="new-content">New Content: </label>
            <input type="text" name="new-content" id="new-content" />
        </form>
    </div>
)

export default EditPost