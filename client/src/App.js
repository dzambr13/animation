import Form from './components/Form'
import Posts from './components/Posts'
import Categories from './components/Categories'
import Nav from './components/Nav'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import EditPost from './components/EditPost'
import './styles/App.css'

function App() {
  const [postValues, setPostValues] = useState([])
  const [categories, setCategories] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const category = await axios.get(`/categories`)
      setCategories(category.data)
    }
    getCategories()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/categories"
            element={<Categories categories={categories} />}
          />
          <Route
            path="/categories/:id/posts"
            element={<Posts posts={posts} setPosts={setPosts} />}
          />
          <Route
            path="/categories/:id/form"
            element={
              <Form postValues={postValues} setPostValues={setPostValues} />
            }
          />
          <Route
            path="/categories/:catId/posts/:postId/:index"
            element={<EditPost posts={posts} setPosts={setPosts} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
