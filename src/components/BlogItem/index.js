// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const BlogItem = props => {
  const {blogList} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogList
  console.log(id)

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <div className="blog-item-image-container">
          <img src={imageUrl} alt={imageUrl} className="blog-item-image" />
        </div>
        <div className="blog-item-image-details">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={avatarUrl} className="avatar-image" />

            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
