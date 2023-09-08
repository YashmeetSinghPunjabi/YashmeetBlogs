import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px] bg-cyan'>
      <NavLink to={`/blog/${post.id}`} >
        <span className="font-bold text-2xl">{post.title}</span>
      </NavLink>
      <p className='text-[10px]'>
        By
        <span > {post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-[10px]'> Posted on {post.date} </p>
      <p> {post.content}</p>
      <div className='flex gap-x-[20px] mt-1 text-blue-600'>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span>{`#${tag}`}</span> 
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
