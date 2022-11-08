import { useEffect, useState } from "react";
import Header from "./header";
import PostInfo from "./post";

const Post= ()=>{
    const [post, setPost] = useState([]);

    useEffect(()=>{
        fetch("insta",{ method: "get"}).then(res=> res.json()).then(result=>{
            // console.log(result);
            setPost(result.posts);
            // console.log(result.posts);
        })
    },[])

    return(
        <div>
            <Header />
            <div className="post-conatiner">

                {post.map((post, i) => {
                    // console.log(post)
                    return(
                        <div>
                            
                            <PostInfo post={post} key={i}/>
                            
                        </div>
                    )
                })}

            </div>
           
        </div>
    )
}
export default Post;