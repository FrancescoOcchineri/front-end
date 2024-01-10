import React from 'react'

export const CommentList = ({comments}) => {
  return (
    <ul>{comments.map((c) => (
        <li key={c._id}>{c.comment}</li>
    ))} 
    </ul>
  )
}



