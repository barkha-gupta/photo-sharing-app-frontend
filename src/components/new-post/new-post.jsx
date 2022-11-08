import React from 'react'; 
import { useState } from 'react';
import Header from '../header';
import "./new-post.css";
import { useNavigate } from 'react-router';
// import { addPost } from '../../services/httpservice';

const NewPost= ()=>{
    let navigate = useNavigate();

    const [image, setImage]= useState("");
    const [author, setAuthor]= useState("");
    const [location, setLocation]= useState("");
    const [description, setDescription]= useState("");
    const [url,setUrl] = useState("")

    function postDetails(e) {
        e.preventDefault();

        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","barkha")
        fetch("https://api.cloudinary.com/v1_1/barkha/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })
        
        if(url){
            fetch("/createpost", {
                method: "post",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    photo:url,
                    author,
                    location,
                    description
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        console.log(data.error);
                    }
                    else {
                        console.log('Created post Successfully')
                        navigate('/insta')
                    }
                }).catch(err => {
                    console.log(err)
                })

        }
        

       
    }

    return (
        <div>
            <div className='newPost'>
                <div>
                    <Header />
                </div>
                <div className='main-section'>
                    <form className='newPost-form' >
                        <div className='form-div one'>
                            <input className='choose-file' type="file" 
                            onChange = {(e)=> {
                                console.log(e.target.files[0])
                                setImage(e.target.files[0])}}
                            placeholder='No file chosen'></input>
                            <button className='browse'>Browse</button>
                        </div>
                        <div className='form-div two'>
                            <input type="text" value={author} onChange= {(e)=> setAuthor(e.target.value)} placeholder='Author'></input>
                            <input type="text" value={location} onChange= {(e)=> setLocation(e.target.value)}  placeholder='Location'></input>
                        </div>
                        <div className='form-div three'>
                            <input type="text" value={description} onChange= {(e)=> setDescription(e.target.value)}  placeholder='Description'></input>
                        </div>
                        <div className='form-div four'> 
                            <button className='post-btn'
                            onClick={postDetails}
                           >Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewPost;