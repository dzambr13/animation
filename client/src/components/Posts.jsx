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