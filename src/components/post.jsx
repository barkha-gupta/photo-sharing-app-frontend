const PostInfo = ({post})=>{
    // console.log(post);
    return(
        <div>
            <div className="card">
            <div className="post-header">
                    <div className="name-setting">
                        <div className="user-name">{post.author}</div>
                        <div className="settings-icon">
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="user-city">{post.location}</div>
                </div>

                <div className="post-image">
                    <img className="image" src={post.photo} alt="10x"></img>
                </div>

                <div className="share-section">
                    <div className="like-icon">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div className="share-icon">
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </div>
                    <div className="date-posted">{new Date().toLocaleDateString()}</div>
                </div>

                <div className="like-section">
                    <div className="num-of-likes">{20} likes</div>
                </div>

                <div className="post-cation">
                    <p>{post.description}</p>
                </div>
                </div>
        </div>
    )
}
export default PostInfo;