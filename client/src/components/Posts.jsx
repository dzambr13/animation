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
    <div className="post-background">
      <Link to={`/categories/${id}/form`} > <button>Add Post</button> </Link>
      {
        props.posts?.map((post, index) =>(
          <div className="post-card"  key={post.id}>
            <h2>{post.nickname}</h2>
            <h3>{post.description}</h3>
            <img className='postImg' style={{display : 'block'}} src={post.url} alt='' />
            <Link to={`/categories/${id}/posts/${post._id}/${index}`}> <button>Edit Post</button> </Link>
            <button onClick={()=>deletePost(post._id)}>Delete Post</button>
            </div>
        ))}
    </div>
  )
}

export default Posts