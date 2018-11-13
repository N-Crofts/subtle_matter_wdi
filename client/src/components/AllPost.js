import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import EditPost from './EditPost'

const mapStateToProps = (state) => {
  return {
      posts: state
  }
}

class AllPost extends Component {

    render() {
        return (
            <div>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? 
                            <EditPost post={post} key={post.id} /> : 
                            <Post post={post} key={post.id} />
                        }
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(mapStateToProps)(AllPost)