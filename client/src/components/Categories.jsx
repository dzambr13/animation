import { useNavigate } from 'react-router-dom'

//testLOL
const Categories = (props) => {
  let navigate = useNavigate()

  const showCategories = (category) => {
    navigate(`${category._id}/posts`)                   
  }


return (
    <div className="animes">
      {
        props.categories?.map((category) =>(
          <div className="category-card" onClick={() => showCategories(category)} key={category.id}>
            <h2 className="cattitle">{category.description}</h2>
            <img className="animeimg" src={category.url} alt='lol' />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3 className="cattitle">{category.posts}</h3>
            </div>
        ))}
    </div>
  )
}

export default Categories