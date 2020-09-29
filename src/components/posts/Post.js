import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/posts/postAction';

const Post = ({ posts, isLoading, error, getPosts }) => {
    useEffect(() => {
        getPosts()
    }, [getPosts]);

    if (isLoading) {
        return <div className="text-center">
            <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        </div>
    }
    if (error) {
        return <div className="text-center text-danger">Error :( {error.message}</div>
    }
    return (
        <ul className="list-group container mt-3">
            {posts.map(post => (
                <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <h4>{post.title}</h4>
                        <div className="badge badge-pill badge-secondary">{post.num_comments} commments</div>
                    </div>
                    <span className="badge badge-primary badge-pill">{post.score}</span>
                </li>
            ))
            }
        </ul>
    )
}

const mapState = state => ({
    posts: state.posts.posts,
    isLoading: state.posts.isLoading,
    error: state.posts.error    
})

export default connect(mapState, {getPosts})(Post)
