import { useNavigate } from 'react-router-dom'


const Categories = (props) => {
  let navigate = useNavigate()

  const showCategories = (category) => {
    navigate(`${category._id}/posts`)                   
  }


return (
    <div className="category-grid">
      {
        props.categories?.map((category) =>(
          <div className="category-card" onClick={() => showCategories(category)} key={category.id}>
            <h2>{category.description}</h2>
            <img style={{display : 'block'}} src={category.url} alt='' />
            <h3>{category.posts}</h3>
            </div>
        ))}
    </div>
  )
}

export default Categories