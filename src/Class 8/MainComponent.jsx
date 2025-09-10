import React from 'react'
import Post from './Post'
const MainComponent = ({data}) => {
  return (
    <div>
      <Post name={data} />
    </div>
  )
}

export default MainComponent

