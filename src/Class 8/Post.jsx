import React, { useContext } from 'react'
import { DataContext } from '../App'

const Post = () => {
    let data=useContext(DataContext)
  return (
    <div>
        
            Single Post of {data};
        
        

    </div>
  )
}

export default Post
