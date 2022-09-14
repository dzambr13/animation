import { useParams } from "react-router-dom"; 
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const Form = (props) => {

  let { id } = useParams()

  let navigate = useNavigate()

  const initialState = {
    nickname: '',
    description: '',
    url: '',
    category: id
  }
  
  const [postValues, setPostValues] = useState(initialState)

  const handleChange = event => {
    setPostValues({...postValues, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`/categories`, postValues)
    navigate(`/categories/${id}/posts`)
  }



  return (
    <div className="posting">
      <h2>Post here</h2>
      <form className="forming"onSubmit={handleSubmit}>

        <label htmlFor='nickname'> Name: </label>
        <input
          id='nickname'
          type="text"
          placeholder="Name"
          value={postValues.nickname}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="description">Comment: </label>
        <textarea
          id='description'
          placeholder="Comment"
          cols="25" rows="1"           
          value={postValues.description}
          onChange={handleChange}
          ></textarea>
        <br></br>
        <br></br>
        <label htmlFor='url'>Image Link: </label>
        <input
          id='url'
          type="text"
          placeholder="Image link"
          value={postValues.url}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <button className="submit" type="submit">Submit</button>
      </form>
      <h1>Post:</h1>
        <div>
          <h3>Name: { postValues.nickname }</h3>
          <p>Description: { postValues.description }</p>
          <image src={postValues.url} alt='user image' />
          
        </div>
      <div></div>
    </div>
  )
}
export default Form
