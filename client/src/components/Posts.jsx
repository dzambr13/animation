import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"; 

const Posts = (props) => {

  let { id } = useParams()

  
  const getCategoryById = async () => {
    let posts = await axios.get(`/categories/${id}/posts`)
    props.setPosts(posts.data)
    console.log(posts.data)
  }
    useEffect(() => {
    getCategoryById()
  }, [])

  const deletePost = async (id) => {
    await axios.delete(`/categories/${id}/posts/${id}`)
    getCategoryById()    
  }

  return (
    <div className="posthm">
            <div className="playerone">
            <div className="player">
              <div className="imgbox">
                  <img src="https://64.media.tumblr.com/8778b5a2c915a5b3e3f41d0031918636/e0d3fdc02e3c395b-da/s640x960/3bcecdb21e6e41d4e656a65970b6e2ba59bf5af6.jpg" alt="AW"></img>
              </div>
              <audio controls autoPlay>
                <source src="client/src/songs/TK from 凛として時雨 『unravel』 Music Video(Full Size).mp3" type="audio/mpeg">
                </source>
              </audio>
            </div>
            </div>
      <Link className="plusbtn"to={`/categories/${id}/form`} > <button className="addbtn"> + </button> </Link>
      {
        props.posts?.map((post, index) =>(
          <div key={post.id}>
            <h2>{post.nickname}</h2>
            <h3>{post.description}</h3>
            <img className='postimg' style={{display : 'block'}} src={post.url} alt='' />
            <Link to={`/categories/${id}/posts/${post._id}/${index}`}> 
            <button className="edbtn" >Edit</button> </Link>
            <br></br>
            <button className="edbtn" onClick={()=>deletePost(post._id)}>Delete</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
        ))}
    </div>
  )
}

export default Posts