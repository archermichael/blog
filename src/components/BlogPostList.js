import React from 'react'
import { connect } from 'react-redux'
import BlogPost from './BlogPost'
import selectPosts from '../selectors/selectPosts'

const BlogPostList = (props) => (
    <div>
        {props.posts.map((post) => <BlogPost post={post} key={post.id}  />)}
    </div>
)

const mapStateToProps = (state) => {
    return {
        posts: selectPosts(state.posts, state.filters)
    }
}

export default connect(mapStateToProps)(BlogPostList)